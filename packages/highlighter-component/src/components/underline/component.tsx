import React from 'react';
import type { ILeaf } from '../common';

export type IUnderline = ILeaf;

export const Underline = (props: IUnderline) => {
  const { children } = props;

  return <u>{children}</u>;
};
