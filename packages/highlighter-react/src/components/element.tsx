/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import { useRenders, useHighlighterCore, useIsomorphicLayoutEffect } from '../hooks';
import useChildren from '../hooks/use-children';
import type { RenderElementAttributes, RenderList } from '../hooks';
import TextComponent from './text';

/**
 * @todo
 * MOCK types -> change to 'highlighter-core' package
 */
import type { Range, Element as HighlighterCoreElement } from '../mock/interfaces';

export interface ElementProps {
  selection: Range | null;
  element: HighlighterCoreElement;
}

function Element(props: ElementProps) {
  const { selection, element } = props;
  const ref = useRef<HTMLElement>(null);
  const highlighterCore = useHighlighterCore();
  const [RenderElement] = useRenders({}) as RenderList;
  const key = highlighterCore.findKey(element);

  const childrenMetadata = useChildren({
    node: element,
    selection,
  });

  const attributes: RenderElementAttributes = {
    'data-highlighter-node': 'element',
    dir: 'ltr',
    ref,
  };

  useIsomorphicLayoutEffect(() => {
    /**
     * @todo
     * Update element-related weak maps with the DOM element ref.
     */
  });

  return (
    <RenderElement element={element} attributes={attributes}>
      {childrenMetadata.map(({
        key: k, node, parent, isLast,
      }) => (
        <TextComponent key={k.id} parent={parent} text={node} isLast={isLast} />
      ))}
    </RenderElement>
  );
}

export default Element;
