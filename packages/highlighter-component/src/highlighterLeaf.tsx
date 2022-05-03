import React, { useContext } from 'react';
import { RenderLeafProps } from 'slate-react';
import { ComponentsContext } from './context';

export type IHighlighterLeaf = RenderLeafProps;

export const HighlighterLeaf = (props: IHighlighterLeaf) => {
  const { attributes, children, leaf } = props;
  const components = useContext(ComponentsContext);

  const JSXBundle = [];
  const leafKeys = Object.keys(leaf);

  components.forEach((el) => {
    if (~leafKeys.indexOf(el.type)) JSXBundle.push(el.component);
  });

  const wrappedChildren = JSXBundle.reduce(
    (accumChildren, Component) => <Component>{accumChildren}</Component>,
    children,
  );

  return <span {...attributes}>{wrappedChildren}</span>;
};
