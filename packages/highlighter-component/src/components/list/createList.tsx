import React from 'react';
import { List, ListItem } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import type { ComponentCreator } from '../../interfaces/creators';

const createList = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPE[0],
  component: List,
  withToolbar() {
    return { ...this, toolbarIcon: <div /> };
  },
});

const createListItem = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPE[1],
  component: ListItem,
  withToolbar() {
    return { ...this, toolbarIcon: <div /> };
  },
});

export const createListModule = (): ComponentCreator<ElementType>[] => [
  createList(),
  createListItem(),
];
