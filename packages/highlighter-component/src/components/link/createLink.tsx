import React from 'react';
import { Link } from './component';
import { ELEMENT_TYPE, ElementType } from './interface';
import type { ComponentCreator } from '../../interfaces/creators';
import { Icon, Link as LinkIcon } from '../../icons';

export const createLink = (): ComponentCreator<ElementType> => ({
  type: ELEMENT_TYPE,
  component: Link,
  withToolbar() {
    return { ...this, toolbarIcon: <Icon icon={LinkIcon} />, toolbarType: 'FLOAT' };
  },
});
