import React from 'react';
import { Italic } from './component';
import type { ILeaf } from '../common';
import { LEAF_TYPE, LeafType } from './interface';
import { Icon, Italic as ItalicIcon } from '../../icons';
import type { ComponentCreator } from '../../interfaces/creators';

export const createItalic = (): ComponentCreator<LeafType, ILeaf> => ({
  type: LEAF_TYPE,
  component: Italic,
  withToolbar() {
    return { ...this, toolbarIcon: <Icon icon={ItalicIcon} size={1.5} />, toolbarType: 'FLOAT' };
  },
});
