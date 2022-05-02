import React from 'react';
import { Heading1, Heading2, Heading3 } from './component';
import { ELEMENT_TYPES, ElementType } from './interface';
import type { ComponentCreator } from '../../interfaces/creators';
import {
  Icon, Heading1 as Heading1Icon, Heading2 as Heading2Icon, Heading3 as Heading3Icon,
} from '../../icons';

const createHeading1 = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPES[0],
  component: Heading1,
  withToolbar() {
    return { ...this, toolbarIcon: <Icon icon={Heading1Icon} />, toolbarType: 'BLOCK' };
  },
});

const createHeading2 = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPES[1],
  component: Heading2,
  withToolbar() {
    return { ...this, toolbarIcon: <Icon icon={Heading2Icon} />, toolbarType: 'BLOCK' };
  },
});

const createHeading3 = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPES[2],
  component: Heading3,
  withToolbar() {
    return { ...this, toolbarIcon: <Icon icon={Heading3Icon} />, toolbarType: 'BLOCK' };
  },
});

export const createHeadings = (): ComponentCreator<ElementType>[] => [
  createHeading1(),
  createHeading2(),
  createHeading3(),
];
