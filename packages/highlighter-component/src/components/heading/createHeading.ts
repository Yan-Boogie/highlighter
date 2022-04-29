import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from './component';
import { ELEMENT_TYPES, ElementType } from './interface';
import type { ComponentCreater } from '../../interfaces/componentCreator';

const createHeading1 = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPES[0],
  component: Heading1,
});

const createHeading2 = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPES[1],
  component: Heading2,
});

const createHeading3 = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPES[2],
  component: Heading3,
});

const createHeading4 = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPES[3],
  component: Heading4,
});

const createHeading5 = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPES[4],
  component: Heading5,
});

const createHeading6 = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPES[5],
  component: Heading6,
});

export const createHeadings = (): ComponentCreater<ElementType>[] => [
  createHeading1(),
  createHeading2(),
  createHeading3(),
  createHeading4(),
  createHeading5(),
  createHeading6(),
];
