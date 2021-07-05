import type { Text } from '../types';

export interface ITextMethods {
  equals: (another: Text, options?: { loose?: boolean }) => boolean;
  isText: (value: any) => value is Text;
  isTextList: (value: any) => value is Text[];
  isTextProps: (props: any) => props is Partial<Text>;
}

export const textMethods: ITextMethods = {};
