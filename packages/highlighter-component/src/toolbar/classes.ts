import { css } from '@emotion/css';

export const classes = {
  toolbar: css`
    position: absolute;
    top: -10000px;
    left: -10000px;
    z-index: 1;
    display: flex;
    flex-direction: row;
  `,
  formatBtnWrapper: css`
    display: flex;
    flex-direction: row;
    padding: 0 0 0 22px;
  `,
  hoveringToolbar: css`
    position: absolute;
    top: -10000px;
    left: -10000px;
    display: flex;
    flex-direction: row;
    padding: 8px 7px 6px;
    z-index: 1;
    background-color: rgb(34, 34, 34);
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.75s ease 0s;
    margin: -6px 0 0 0;
  `,
};
