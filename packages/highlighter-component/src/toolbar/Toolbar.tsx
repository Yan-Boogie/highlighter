import React from 'react';
import { ROW_EVENT } from './constants/eventEmitter';
import { usePosititonListener } from './hooks/useEventEmitter';

export const Toolbar = () => {
  const { position, ref } = usePosititonListener(ROW_EVENT);

  console.log('position-->\n', position);

  return <div ref={ref}>Toobar</div>;
};
