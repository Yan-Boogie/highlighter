import React from 'react';
import type { ComponentCreater, ExtendedTypes } from './interfaces/componentCreator';

export const ComponentsContext = React.createContext<ComponentCreater<ExtendedTypes>[]>([]);
