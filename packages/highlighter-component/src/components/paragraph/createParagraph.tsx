import { Paragragh } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import type { ComponentCreator } from '../../interfaces/creators';

export const createParagraph = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPE,
  component: Paragragh,
  withToolbar() {
    return { ...this, toolbarIcon: null, toolbarType: 'NULL' };
  },
});
