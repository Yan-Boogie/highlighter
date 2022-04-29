import React from 'react';
import type { IElement } from '../common';

export type IDivider = Pick<IElement, 'attributes'>;

export const Divider = (props: IDivider) => {
  const { attributes } = props;

  return (
    <hr {...attributes} />
  );
};
