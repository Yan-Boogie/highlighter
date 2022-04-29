import type { BaseEditor } from 'slate';
import type { ReactEditor } from 'slate-react';
import type { HistoryEditor } from 'slate-history';

import type { Heading } from '../components';

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type CustomElement = Heading.Element;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
  }
}
