import { Paragragh } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import type { ComponentCreater } from '../../interfaces/componentCreator';

export const createParagraph = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPE,
  component: Paragragh,
});
