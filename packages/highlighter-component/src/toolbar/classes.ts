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
};
