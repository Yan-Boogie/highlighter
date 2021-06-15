/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { css } from 'emotion';

function Highlighter() {
  return <div />;
}

/**
 * @todo
 * Leafs rendering feature
 *
 */
const Leaf = ({ attributes, children, leaf }) => (
  <span
    {...attributes}
    className={css`
      font-weight: ${leaf.bold && 'bold'};
      background-color: ${leaf.highlight && '#ffeeba'};
    `}
  >
    {children}
  </span>
);

/**
 * @todo
 * Input Value structure exported by "Highlighter" lib
 *
 */

const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text: `This is editable text that you can search.
      As you search, it looks for matching strings of text, and adds `,
      },
      { text: 'decorations', highlighted: true },
      { text: ' to them in realtime.' },
    ],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself by typing in the search box above!' }],
  },
];

export default Highlighter;
