import React, { useState, useLayoutEffect } from 'react';
import { css } from '@emotion/css';
import { ROW_EVENT } from './constants/eventEmitter';
import { usePosititonListener } from './hooks/useEventEmitter';
import ToolbarButton from './components/ToolbarButton';
import { Icon, Add } from '../icons';
import { classes } from './classes';

export const Toolbar = () => {
  const { position, ref } = usePosititonListener(ROW_EVENT);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!ref.current || !position) return;

    const element = ref.current;

    element.style.top = position.top;
    element.style.left = position.left;
  }, [position, ref]);

  return (
    <div className={classes.toolbar} ref={ref}>
      <ToolbarButton
        onClick={() => setOpen((prev) => !prev)}
        className={
          open
            ? css`
                transform: rotate(45deg);
              `
            : ''
        }
      >
        <Icon icon={Add} size={5} />
      </ToolbarButton>
    </div>
  );
};
