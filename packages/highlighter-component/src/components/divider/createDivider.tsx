import React from 'react';
import { Divider } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import { Icon, Divider as DividerIcon } from '../../icons';
import type { ComponentCreator } from '../../interfaces/creators';

export const createDivider = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPE,
  component: Divider,
  withToolbar() {
    return { ...this, toolbarIcon: <Icon icon={DividerIcon} />, toolbarType: 'BLOCK' };
  },
});
