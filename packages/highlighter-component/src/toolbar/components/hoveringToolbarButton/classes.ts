import { css } from '@emotion/css';

export const classes = {
  button: (active: boolean) => css`
    cursor: pointer;
    color: ${active ? '#b5e5a4' : '#CCC'};
    border: none;
    background-color: inherit;
  `,
};
