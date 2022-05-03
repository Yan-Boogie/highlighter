import React, { useMemo, useContext, useLayoutEffect } from 'react';
import { Editor, Transforms, Text } from 'slate';
import { useSlate } from 'slate-react';
import { ToolbarContext } from '../context';
import { classes } from './classes';
import HoveringToolbarBtn from './components/hoveringToolbarButton';
import Portal from './components/portal';
import { SELECTION_EVENT } from './constants/eventEmitter';
import { usePosititonListener } from './hooks/useEventEmitter';
import type { LeafToolbarCreator, ExtendedLeafTypes } from '../interfaces/creators';

export const HoveringToolbar = () => {
  const { position, ref } = usePosititonListener(SELECTION_EVENT);
  const toolbarCreators = useContext(ToolbarContext);
  const editor = useSlate();

  const leafToolbars: LeafToolbarCreator[] = useMemo(
    () => toolbarCreators.filter((el) => el.type === 'FLOAT') as LeafToolbarCreator[],
    [toolbarCreators],
  );

  const isFormatActive = (format: ExtendedLeafTypes) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => n[format] === true,
      mode: 'all',
    });

    return !!match;
  };

  const toggleFormat = (format: ExtendedLeafTypes) => {
    const isActive = isFormatActive(format);

    Transforms.setNodes(editor, { [format]: isActive ? null : true }, { match: Text.isText, split: true });
  };

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
          <HoveringToolbarBtn
            key={el.format}
            active={isFormatActive(el.format)}
            onClick={() => toggleFormat(el.format)}
          >
            {el.icon}
          </HoveringToolbarBtn>
        ))}
      </div>
    </Portal>
  );
};
