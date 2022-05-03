import React from 'react';
import type { ILeaf } from '../common';

export type IBold = ILeaf;

export const Bold = (props: IBold) => {
  const { children } = props;

  return <strong>{children}</strong>;
};
