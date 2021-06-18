/* eslint-disable no-console */
import React, { useRef, useCallback } from 'react';
import throttle from 'lodash/throttle';
import { useHighlighterCore, useIsomorphicLayoutEffect, useRenders } from '../hooks';
import type { RenderElementProps, RenderLeafProps } from '../hooks';
import useChildren from '../hooks/use-children';
import ElementComponent from './element';

export interface InteractiveProps {
  placeholder?: string;
  style?: React.CSSProperties;
  renderElement?: (props: RenderElementProps) => JSX.Element;
  renderLeaf?: (props: RenderLeafProps) => JSX.Element;
  as?: React.ElementType;
}

function Interactive(props: InteractiveProps) {
  const {
    as: Component = 'div', style = {}, renderElement, renderLeaf,
  } = props;

  const highlighterCore = useHighlighterCore();
  const { RendersProvider } = useRenders({ renderList: [renderElement, renderLeaf] }) as {
    RendersProvider: ({ children }: { children: React.ReactNode }) => JSX.Element;
  };
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    /**
     * @todo
     * CORE updates
     */
  });

  const onDOMSelectionChange = useCallback(() => {
    throttle(() => {
      /**
       * @todo
       * highlighterCore.modifySelection();
       */
      console.log('DOM SELECTION CHANGED!!\n');
    }, 100);
  }, []);

  useIsomorphicLayoutEffect(() => {
    const { window } = highlighterCore;

    window.document.addEventListener('selectionchange', onDOMSelectionChange);

    return () => {
      window.document.removeEventListener('selectionchange', onDOMSelectionChange);
    };
  }, [highlighterCore, onDOMSelectionChange]);

  const childrenMetadata = useChildren({ node: highlighterCore, selection: highlighterCore.selection });

  return (
    <RendersProvider>
      <Component
        data-gramm={false}
        spellCheck={false}
        autoCorrect={false}
        autoCapitalize={false}
        ref={ref}
        style={{
          // Allow positioning relative to the editable element.
          position: 'relative',
          // Prevent the default outline styles.
          outline: 'none',
          // Preserve adjacent whitespace and new lines.
          whiteSpace: 'pre-wrap',
          // Allow words to break if they are too long.
          wordWrap: 'break-word',
          // Allow for passed-in styles to override anything.
          ...style,
        }}
      >
        {childrenMetadata.map(({ key, node: n, selection: sel }) => (
          <ElementComponent key={key.id} element={n} selection={sel} />
        ))}
      </Component>
    </RendersProvider>
  );
}

export default Interactive;
