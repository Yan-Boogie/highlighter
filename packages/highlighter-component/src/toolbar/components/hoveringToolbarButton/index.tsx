import React, { PropsWithChildren, MouseEventHandler } from 'react';
import { cx } from '@emotion/css';
import { classes } from './classes';

export type IButton = PropsWithChildren<{
  active: boolean;
  className?: string;
  onClick: MouseEventHandler<HTMLElement>;
}>;

const Button = (props: IButton) => {
  const { active, className = '', ...rest } = props;

  return <button {...rest} type="button" className={cx(className, classes.button(active))} />;
};

export default Button;
