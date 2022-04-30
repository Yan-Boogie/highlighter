import React from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
} from './component';
import { ELEMENT_TYPES, ElementType } from './interface';
import type { ComponentCreator } from '../../interfaces/creators';

const createHeading1 = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPES[0],
  component: Heading1,
  withToolbar() {
    return { ...this, toolbarIcon: <div /> };
  },
});

const createHeading2 = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPES[1],
  component: Heading2,
  withToolbar() {
    return { ...this, toolbarIcon: <div /> };
  },
});

const createHeading3 = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPES[2],
  component: Heading3,
  withToolbar() {
    return { ...this, toolbarIcon: <div /> };
  },
});

export const createHeadings = (): ComponentCreator<ElementType>[] => [
  createHeading1(),
  createHeading2(),
  createHeading3(),
];
