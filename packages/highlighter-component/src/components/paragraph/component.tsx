import React from 'react';
import type { IElement } from '../common';

export type IParagraph = IElement;

export const Paragragh = (props: IParagraph) => {
  const { attributes, children } = props;

  return (
    <p {...attributes}>
      {children}
    </p>
  );
};
