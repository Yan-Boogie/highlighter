import React from 'react';
import { List, ListItem } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import type { ComponentCreator } from '../../interfaces/creators';
import { Icon, OrderedList } from '../../icons';

const createList = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPE[0],
  component: List,
  withToolbar() {
    return { ...this, toolbarIcon: <Icon icon={OrderedList} />, toolbarType: 'BLOCK' };
  },
});

const createListItem = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPE[1],
  component: ListItem,
  withToolbar() {
    return { ...this, toolbarIcon: null, toolbarType: 'NULL' };
  },
});

export const createListModule = (): ComponentCreator<ElementType>[] => [createList(), createListItem()];
