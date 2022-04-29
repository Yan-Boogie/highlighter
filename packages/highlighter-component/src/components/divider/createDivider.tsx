import { Divider } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import type { ComponentCreater } from '../../interfaces/componentCreator';

export const createDivider = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPE,
  component: Divider,
});
