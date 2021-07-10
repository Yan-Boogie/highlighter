/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Ancestor, Range } from 'highlighter-core';

import { useHighlighterCore } from './use-highlighter-core';
import { useMethodsGateway } from './use-methods-gateway';

export interface UseChildrenProps {
  node: Ancestor;
  selection?: Range;
}

function useChildren(props: UseChildrenProps) {
  const { node, selection = null } = props;
  const highlighterCore = useHighlighterCore();
  const methodsGateway = useMethodsGateway();

  const path = methodsGateway('CORE', 'findPath')(node);
  const children = [];

  node.children.forEach((descendant, idx) => {
    const p = path.concat(idx);
    const key = methodsGateway('CORE', 'findKey')(descendant);
    const range = highlighterCore.range(/** new Location(p) */) as Range;
    // const sel = selection && range.intersection(selection);

    children.push({
      key,
      node: descendant,
      // selection: sel,
      parent: node,
      isLast: idx === node.children.length - 1,
    });
  });

  /**
   * @todo
   * DOM: NODE_TO_INDEX & NODE_TO_PARENT settings
   */

  return children;
}

export default useChildren;
