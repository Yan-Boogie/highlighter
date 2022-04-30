import React from 'react';
import { Divider } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import type { ComponentCreator } from '../../interfaces/creators';

export const createDivider = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPE,
  component: Divider,
  withToolbar() {
    return { ...this, toolbarIcon: <div /> };
  },
});
