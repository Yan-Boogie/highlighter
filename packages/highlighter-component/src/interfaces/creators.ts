import { ReactNode } from 'react';
import {
  Heading, Paragraph, Divider, Link, List, Bold, Italic, Underline, IElement, ILeaf,
} from '../components';

export type ExtendedElementTypes =
  | Heading.ElementType
  | Paragraph.ElementType
  | Divider.ElementType
  | Link.ElementType
  | List.ElementType;

export type ExtendedLeafTypes = Bold.LeafType | Italic.LeafType | Underline.LeafType;

export type ExtendedTypes = ExtendedElementTypes | ExtendedLeafTypes;

export type ToolbarType = 'BLOCK' | 'FLOAT' | 'NULL';

export type INode = IElement | ILeaf;

export type ComponentCreator<T extends ExtendedTypes = ExtendedTypes, S extends INode = IElement> = {
  type: T;
  component: (props: S) => JSX.Element;
  withToolbar: () => ComponentCreatorWithToolbar<T>;
};

export type ComponentCreatorWithToolbar<T extends ExtendedTypes = ExtendedTypes> = ComponentCreator<T> & {
  toolbarIcon: ReactNode;
  toolbarType: ToolbarType;
};

export type ComponentCreatorUnion = ComponentCreator | ComponentCreatorWithToolbar;

export type ToolbarCreator<T extends ExtendedTypes = ExtendedTypes> = {
  format: T;
  icon: ReactNode;
  type: ToolbarType;
};

export type BlockToolbarCreator<T extends ExtendedElementTypes = ExtendedElementTypes> = ToolbarCreator<T>;

export type LeafToolbarCreator<T extends ExtendedLeafTypes = ExtendedLeafTypes> = ToolbarCreator<T>;
