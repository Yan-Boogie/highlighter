import * as Highlight from './highlight';

export {
  Highlight,
};

export type ElementTypes = Highlight.ElementType;

export type HighlightElement = Highlight.Element;

declare module 'slate' {
  interface CustomTypes {
    Element: HighlightElement;
  }
}
