import type { BaseEditor } from 'slate';
import type { ReactEditor } from 'slate-react';
import type { HistoryEditor } from 'slate-history';

import type {
  Heading, Paragraph, Divider, Link, List,
} from '../components';

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type CustomElement = Heading.Element | Paragraph.Element | Divider.Element | Link.Element | List.Element;

export type ElementTypes =
  | Heading.ElementType
  | Paragraph.ElementType
  | Divider.ElementType
  | Link.ElementType
  | List.ElementType;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
  }
}