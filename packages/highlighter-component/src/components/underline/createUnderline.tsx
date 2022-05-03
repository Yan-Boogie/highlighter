import React from 'react';
import { Underline } from './component';
import type { ILeaf } from '../common';
import { LEAF_TYPE, LeafType } from './interface';
import { Icon, Underline as UnderlineIcon } from '../../icons';
import type { ComponentCreator } from '../../interfaces/creators';

export const createUnderLine = (): ComponentCreator<LeafType, ILeaf> => ({
  type: LEAF_TYPE,
  component: Underline,
  withToolbar() {
    return { ...this, toolbarIcon: <Icon icon={UnderlineIcon} size={1.5} />, toolbarType: 'FLOAT' };
  },
});
