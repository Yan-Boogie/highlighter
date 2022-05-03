import React from 'react';
import type { ILeaf } from '../common';

export type IItalic = ILeaf;

export const Italic = (props: IItalic) => {
  const { children } = props;

  return <em>{children}</em>;
};
