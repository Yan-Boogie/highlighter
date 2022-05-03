import React from 'react';
import type { ILeaf } from '../common';

export type IUnderline = ILeaf;

export const Underline = (props: IUnderline) => {
  const { attributes, children } = props;

  return <u {...attributes}>{children}</u>;
};
