import React from 'react';
import type { IElement } from '../common';

export interface ILink extends IElement {
  url: string;
}

export const Link = (props: ILink) => {
  const { attributes, children, url } = props;

  return (
    <a href={url} {...attributes}>
      {children}
    </a>
  );
};
