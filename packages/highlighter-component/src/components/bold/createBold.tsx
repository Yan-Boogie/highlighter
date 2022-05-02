import React from 'react';
import { Bold } from './component';
import type { ILeaf } from '../common';
import { LEAF_TYPE, LeafType } from './interface';
import { Icon, Bold as BoldIcon } from '../../icons';
import type { ComponentCreator } from '../../interfaces/creators';

export const createBold = (): ComponentCreator<LeafType, ILeaf> => ({
  type: LEAF_TYPE,
  component: Bold,
  withToolbar() {
    return { ...this, toolbarIcon: <Icon icon={BoldIcon} size={1.5} />, toolbarType: 'FLOAT' };
  },
});
