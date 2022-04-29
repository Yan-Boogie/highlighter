import {
  Heading,
  Paragraph,
  Divider,
  Link,
  List,
  IElement,
} from '../components';

export type ExtendedTypes =
  | Heading.ElementType
  | Paragraph.ElementType
  | Divider.ElementType
  | Link.ElementType
  | List.ElementType;

export type ComponentCreater<T extends ExtendedTypes> = {
  type: T;
  component: (props: IElement) => JSX.Element;
};
