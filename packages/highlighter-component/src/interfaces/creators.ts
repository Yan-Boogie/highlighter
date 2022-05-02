import { ReactNode } from 'react';
import {
  Heading, Paragraph, Divider, Link, List, IElement,
} from '../components';

export type ExtendedTypes =
  | Heading.ElementType
  | Paragraph.ElementType
  | Divider.ElementType
  | Link.ElementType
  | List.ElementType;

export type ToolbarType = 'BLOCK' | 'FLOAT' | 'NULL';

export type ComponentCreator<T extends ExtendedTypes> = {
  type: T;
  component: (props: IElement) => JSX.Element;
  withToolbar: () => ComponentCreatorWithToolbar<T>;
};

export type ComponentCreatorWithToolbar<T extends ExtendedTypes> = ComponentCreator<T> & {
  toolbarIcon: ReactNode;
  toolbarType: ToolbarType;
};

export type ComponentCreatorUnion = ComponentCreator<ExtendedTypes> | ComponentCreatorWithToolbar<ExtendedTypes>;

export type ToolbarCreator<T extends ExtendedTypes> = {
  format: T;
  icon: ReactNode;
  type: ToolbarType;
};
