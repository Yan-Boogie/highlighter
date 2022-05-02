import React from 'react';
import type { ILeaf } from '../common';

export type IBold = ILeaf;

export const Bold = (props: IBold) => {
  const { attributes, children } = props;

  return <strong {...attributes}>{children}</strong>;
};
