import React, { useContext } from 'react';
import { RenderElementProps } from 'slate-react';
import { ComponentsContext } from './context';

export type IHighlighterElement = RenderElementProps;

export const HighlighterElement = (props: IHighlighterElement) => {
  const { attributes, children, element } = props;
  const components = useContext(ComponentsContext);

  const idx = components.findIndex((comp) => comp.type === element.type);

  if (!~idx) throw new Error('Unexpected element type');

  const Component = components[idx].component;

  return (
    <Component attributes={attributes}>
      {children}
    </Component>
  );
};
