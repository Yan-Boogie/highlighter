import { Link } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import type { ComponentCreater } from '../../interfaces/componentCreator';

export const createLink = (): ComponentCreater<ElementType> => ({
  type: ELEMENT_TYPE,
  component: Link,
});
