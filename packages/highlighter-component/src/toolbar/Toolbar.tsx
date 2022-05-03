import React, {
  useState, useLayoutEffect, useContext, useMemo,
} from 'react';
import { css } from '@emotion/css';
import { Editor, Element as SlateElement, Transforms } from 'slate';
import { useSlate } from 'slate-react';
import { ROW_EVENT } from './constants/eventEmitter';
import { usePosititonListener } from './hooks/useEventEmitter';
import ToolbarButton from './components/toolbarButton';
import { Icon, Add } from '../icons';
import { classes } from './classes';
import { ToolbarContext } from '../context';
import { LIST_TYPES } from './constants';
import type { BlockToolbarCreator, ExtendedElementTypes } from '../interfaces/creators';

export const Toolbar = () => {
  const { position, ref } = usePosititonListener(ROW_EVENT);
  const [open, setOpen] = useState(false);
  const toolbarCreators = useContext(ToolbarContext);
  const editor = useSlate();

  const blockToolbars: BlockToolbarCreator[] = useMemo(
    () => toolbarCreators.filter((el) => el.type === 'BLOCK') as BlockToolbarCreator[],
    [toolbarCreators],
  );

  const isBlockActive = (format: ExtendedElementTypes) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });

    return !!match;
  };

  const toggleBlock = (format: ExtendedElementTypes) => {
    const isActive = isBlockActive(format);
    const isList = LIST_TYPES.includes(format);
    const getNewProperties = (): ExtendedElementTypes => {
      if (isActive) return 'PARAGRAPH';

      if (isList) return 'LIST_ITEM';

      return format;
    };

    Transforms.unwrapNodes(editor, {
      match: (n) => LIST_TYPES.includes(!Editor.isEditor(n) && SlateElement.isElement(n) && n.type),
      split: true,
    });

    const newProperties: Partial<SlateElement> = {
      type: getNewProperties(),
    };

    Transforms.setNodes(editor, newProperties);

    if (!isActive && isList) {
      const block = { type: format, children: [] } as SlateElement;

      Transforms.wrapNodes(editor, block);
    }
  };

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
      {open && (
        <div className={classes.formatBtnWrapper}>
          {blockToolbars.map((el) => (
            <ToolbarButton
              className={css`
                margin: 0 9px 0 0;
                ${isBlockActive(el.format) ? 'background-color: #b5e5a4;' : ''}
              `}
              key={el.format}
              onClick={() => toggleBlock(el.format)}
            >
              {el.icon}
            </ToolbarButton>
          ))}
        </div>
      )}
    </div>
  );
};
