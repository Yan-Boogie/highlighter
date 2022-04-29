import React from 'react';
import type { IElement } from '../common';

export type IList = IElement;

export const List = (props: IList) => {
  const { attributes, children } = props;

  return (
    <ul {...attributes}>
      {children}
    </ul>
  );
};

export const ListItem = (props: IList) => {
  const { attributes, children } = props;

  return (
    <li {...attributes}>
      {children}
    </li>
  );
};
