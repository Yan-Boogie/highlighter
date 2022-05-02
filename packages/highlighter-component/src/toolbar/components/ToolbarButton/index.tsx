import React from 'react';
import { cx } from '@emotion/css';
import { classes } from './classes';

export interface IToolbarButton {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const ToolbarButton = (props: IToolbarButton) => {
  const { children, onClick, className = '' } = props;

  return (
    <button className={cx(classes.button, className)} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ToolbarButton;
