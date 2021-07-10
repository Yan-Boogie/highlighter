/* eslint-disable no-prototype-builtins */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import isPlainObject from 'is-plain-object';
import isEqual from 'fast-deep-equal';
import type { Text } from '../types';

export interface ITextMethods {
  /**
   * Check if two text nodes are equal.
   * @param loose only compare the types omitted `text` attribute if set true
   */
  equals: (text: Text, another: Text, options?: { loose?: boolean }) => boolean;

  /**
   * Check if a value implements the `Text` interface.
   */
  isText: (value: any) => value is Text;

  /**
   * Check if a value is a list of `Text` objects.
   */
  isTextList: (value: any) => value is Text[];

  /**
   * Check if some props are a partial of Text.
   */
  isTextProps: (props: any) => props is Partial<Text>;

  /**
   * Check if an text matches set of properties.
   *
   * Note: this is for matching custom properties, and it does not ensure that
   * the `text` property are two nodes equal.
   */
  matches: (text: Text, props: Partial<Text>) => boolean;
}

export const textMethods: ITextMethods = {
  equals(text, another, options) {
    const { loose = false } = options;

    function omitText(
      /**
       * Record<any, any> for customized `Text` type
       */
      obj: Record<any, any>,
    ) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { _text, ...rest } = obj;

      return rest;
    }

    return isEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },
  isText(value: any): value is Text {
    return isPlainObject(value) && typeof value.text === 'string';
  },
  isTextList(value: any): value is Text[] {
    return Array.isArray(value) && value.every((val) => textMethods.isText(val));
  },
  isTextProps(props: any): props is Partial<Text> {
    return 'text' in props && props.text !== undefined;
  },
  matches(text: Text, props: Partial<Text>): boolean {
    for (const key in props) {
      if (key === 'text') {
        continue;
      }

      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }

    return true;
  },
};
