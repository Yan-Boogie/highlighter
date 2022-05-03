import { useEffect, useRef, useState } from 'react';
import EventEmitter from 'events';
import { Range, Editor, Path } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import { SELECTION_EVENT, ROW_EVENT } from '../constants/eventEmitter';

const eventEmitter = new EventEmitter();

export type IEventPackage = DOMRect;

export type IPosition = {
  top: string;
  left: string;
};

export type IChannel = typeof SELECTION_EVENT | typeof ROW_EVENT;

export const useEventEmitter = () => {
  const editor = useSlate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return () => {};

    const eventEmitHandler = () => {
      const { selection } = editor;

      if (!selection || !ReactEditor.isFocused(editor)) {
        return;
      }

      if (Range.isCollapsed(selection) || Editor.string(editor, selection) === '') {
        // Get the root 'Element' of selection in slate tree
        const [slateNode] = Editor.node(editor, Path.ancestors(Editor.path(editor, selection, { edge: 'start' }))[1]);

        const rect = ReactEditor.toDOMNode(editor, slateNode).getBoundingClientRect();

        eventEmitter.emit(ROW_EVENT, rect);
        eventEmitter.emit(SELECTION_EVENT, null);

        return;
      }

      const domSelection = ReactEditor.getWindow(editor).getSelection();
      const domRange = domSelection.getRangeAt(0);
      const rect = domRange.getBoundingClientRect();

      eventEmitter.emit(SELECTION_EVENT, rect);
    };

    const mouseupHandler = () => {
      eventEmitHandler();
    };

    const keyupHandler = () => {
      eventEmitHandler();
    };

    const wrapperNode = wrapperRef.current;

    wrapperNode.addEventListener('mouseup', mouseupHandler, false);
    wrapperNode.addEventListener('keyup', keyupHandler, false);

    return () => {
      wrapperNode.removeEventListener('mouseup', mouseupHandler);
      wrapperNode.removeEventListener('keyup', keyupHandler);
    };
  }, [editor]);

  return wrapperRef;
};

export const usePosititonListener = (channel: IChannel) => {
  const [position, setPosition] = useState<IPosition | null>(null);
  const ref = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (!ref.current) return () => {};

    const element = ref.current;

    const getPosition = (eventPackage: IEventPackage): IPosition => {
      switch (channel) {
        case ROW_EVENT: {
          const top = `${eventPackage.top + window.pageYOffset - element.offsetHeight + 6}px`;
          const left = '-30px';

          return { top, left };
        }

        case SELECTION_EVENT: {
          console.log('eventPackage-->\n', eventPackage);
          console.log('element-->\n', element);

          const top = `${eventPackage.top + window.pageYOffset - element.offsetHeight}px`;
          const left = `${eventPackage.left + window.pageXOffset - element.offsetWidth / 2 + eventPackage.width / 2}px`;

          return { top, left };
        }

        default:
          return null;
      }
    };

    const eventHandler = (eventPackage: IEventPackage) => {
      const newPosition = eventPackage && getPosition(eventPackage);

      setPosition((prev) => {
        if (!newPosition) return newPosition;

        const { top, left } = newPosition;

        if (!prev) return { top, left };

        if (prev.top === top && prev.left === left) return prev;

        return { top, left };
      });
    };

    eventEmitter.on(channel, eventHandler);

    return () => {
      eventEmitter.removeListener(channel, eventHandler);
    };
  }, [channel]);

  return { position, ref };
};
