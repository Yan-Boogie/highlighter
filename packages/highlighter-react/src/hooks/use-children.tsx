/* eslint-disable @typescript-eslint/no-unused-vars */
import { useHighlighterCore } from './use-highlighter-core';

import { Ancestor, Range } from '../mock/interfaces';

export interface UseChildrenProps {
  node: Ancestor;
  selection?: Range;
}

function useChildren(props: UseChildrenProps) {
  const { node, selection = null } = props;
  const highlighterCore = useHighlighterCore();
  const path = highlighterCore.findPath(node);
  const children = [];

  node.children.forEach((descendant, idx) => {
    const p = path.numbers.concat(idx);
    const key = highlighterCore.findKey(descendant);
    /**
     * @todo
     * 尋找屬性注入的測試替代方案
     */
    // const range = highlighterCore.range(/** new Location(p) */) as Range;
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
