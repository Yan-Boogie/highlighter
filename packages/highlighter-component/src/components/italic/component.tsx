import React from 'react';
import type { ILeaf } from '../common';

export type IItalic = ILeaf;

export const Italic = (props: IItalic) => {
  const { attributes, children } = props;

  return <em {...attributes}>{children}</em>;
};
