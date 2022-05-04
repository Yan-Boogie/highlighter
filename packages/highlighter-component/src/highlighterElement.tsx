import React, { useContext } from 'react';
import { RenderElementProps } from 'slate-react';
import { ComponentsContext } from './context';
import { Paragraph as paragraphModule } from './components';

export type IHighlighterElement = RenderElementProps;

export const HighlighterElement = (props: IHighlighterElement) => {
  const { attributes, children, element } = props;
  const components = useContext(ComponentsContext);

  const idx = components.findIndex((comp) => comp.type === element.type);

  const Component = ~idx ? components[idx].component : paragraphModule.Paragragh;

  return <Component attributes={attributes}>{children}</Component>;
};
