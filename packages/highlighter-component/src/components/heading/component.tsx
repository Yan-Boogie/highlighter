import React from 'react';
import type { IElement } from '../common';

export type IHeading = IElement;

export const Heading1 = (props: IHeading) => {
  const { attributes, children } = props;

  return (
    <h1 {...attributes}>
      {children}
    </h1>
  );
};

export const Heading2 = (props: IHeading) => {
  const { attributes, children } = props;

  return (
    <h2 {...attributes}>
      {children}
    </h2>
  );
};

export const Heading3 = (props: IHeading) => {
  const { attributes, children } = props;

  return (
    <h3 {...attributes}>
      {children}
    </h3>
  );
};

export const Heading4 = (props: IHeading) => {
  const { attributes, children } = props;

  return (
    <h4 {...attributes}>
      {children}
    </h4>
  );
};

export const Heading5 = (props: IHeading) => {
  const { attributes, children } = props;

  return (
    <h5 {...attributes}>
      {children}
    </h5>
  );
};

export const Heading6 = (props: IHeading) => {
  const { attributes, children } = props;

  return (
    <h6 {...attributes}>
      {children}
    </h6>
  );
};
