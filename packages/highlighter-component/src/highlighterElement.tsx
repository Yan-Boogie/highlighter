import React from 'react';
import { useSlate, RenderElementProps } from 'slate-react';

export type IHighlighterElement = RenderElementProps;

export const HighlighterElement = (props: IHighlighterElement) => {
  const { attributes, children, element } = props;

  const editor = useSlate();

  switch (element.type) {
    
  }
};
