import { ReactNode } from 'react';
import { Heading } from '../components';

export type ExtendedTypes = Heading.ElementType;

export type ComponentCreater<T extends ExtendedTypes> = {
  type: T;
  component: ReactNode;
};
