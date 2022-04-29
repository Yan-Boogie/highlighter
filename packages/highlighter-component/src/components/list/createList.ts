import { List, ListItem } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import type { ComponentCreater } from '../../interfaces/componentCreator';

const createList = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPE[0],
  component: List,
});

const createListItem = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPE[1],
  component: ListItem,
});

export const createListModule = (): ComponentCreater<ElementType>[] => [
  createList(),
  createListItem(),
];
