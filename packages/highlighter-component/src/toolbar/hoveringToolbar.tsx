import React, { useMemo, useContext, useLayoutEffect } from 'react';
import { ToolbarContext } from '../context';
import { classes } from './classes';
import HoveringToolbarBtn from './components/hoveringToolbarButton';
import Portal from './components/portal';
import { SELECTION_EVENT } from './constants/eventEmitter';
import { usePosititonListener } from './hooks/useEventEmitter';
import type { LeafToolbarCreator } from '../interfaces/creators';

export const HoveringToolbar = () => {
  const { position, ref } = usePosititonListener(SELECTION_EVENT);
  const toolbarCreators = useContext(ToolbarContext);

  const leafToolbars: LeafToolbarCreator[] = useMemo(
    () => toolbarCreators.filter((el) => el.type === 'FLOAT') as LeafToolbarCreator[],
    [toolbarCreators],
  );

  useLayoutEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    if (!position) {
      element.removeAttribute('style');

      return;
    }

    element.style.opacity = '1';
    element.style.top = position.top;
    element.style.left = position.left;
  }, [position, ref]);

  return (
    <Portal>
      <div className={classes.hoveringToolbar} ref={ref}>
        {leafToolbars.map((el) => (
          <HoveringToolbarBtn key={el.format} active={false} onClick={() => console.log('onClick')}>
            {el.icon}
          </HoveringToolbarBtn>
        ))}
      </div>
    </Portal>
  );
};
