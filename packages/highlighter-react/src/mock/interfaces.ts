/* eslint-disable @typescript-eslint/no-empty-interface */
export interface HighlightEditor {}

export interface Descendant {}

export interface Commons {
  Editor: {
    isEditor: (HighlightEditor) => boolean;
  };
}
