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

      if (Range.isCollapsed(selection)) {
        // Get the root 'Element' of selection in slate tree
        const [slateNode] = Editor.node(editor, Path.ancestors(Editor.path(editor, selection, { edge: 'start' }))[1]);

        const rect = ReactEditor.toDOMNode(editor, slateNode).getBoundingClientRect();

        eventEmitter.emit(ROW_EVENT, rect);
      }
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

    const eventHandler = (eventPackage: IEventPackage) => {
      const top = `${eventPackage.top + window.pageYOffset - element.offsetHeight + 6}px`;
      const left = '-30px';

      setPosition((prev) => {
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
