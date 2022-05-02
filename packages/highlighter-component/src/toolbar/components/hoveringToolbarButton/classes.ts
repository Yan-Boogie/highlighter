import { css } from '@emotion/css';

export const classes = {
  button: (active: boolean) => css`
    cursor: pointer;
    color: ${active ? '#000' : '#CCC'};
    border: none;
    background-color: inherit;
  `,
};
