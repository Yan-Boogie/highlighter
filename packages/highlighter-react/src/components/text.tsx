/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';

import {
  useIsomorphicLayoutEffect, useHighlighterCore, useRenders, RenderList, RenderLeafAttributes,
} from '../hooks';

/**
 * @todo
 * MOCK types -> change to 'highlighter-core' package
 */
import { Element, Text as HighlighterCoreText } from '../mock/interfaces';

export interface TextProps {
  parent: Element;
  text: HighlighterCoreText;
  isLast: boolean;
}

function Text(props: TextProps) {
  const { isLast, parent, text } = props;
  const ref = useRef<HTMLSpanElement>(null);
  const highlighterCore = useHighlighterCore();
  const key = highlighterCore.findKey(text);
  const [, RenderLeaf] = useRenders({}) as RenderList;

  useIsomorphicLayoutEffect(() => {
    /**
     * @todo
     * Update element-related weak maps with the DOM element ref.
     */
  });

  const attributes: RenderLeafAttributes = {
    'data-slate-leaf': true,
  };

  return (
    <span data-highlighter-node="text" ref={ref}>
      <RenderLeaf text={text} attributes={attributes}>
        <span data-highlighter-string>
          {text}
          {isLast && text.text.slice(-1) === '\n' ? '\n' : null}
        </span>
      </RenderLeaf>
    </span>
  );
}

export default Text;
