import React from 'react';
import type { ComponentCreator, ExtendedTypes } from './interfaces/creators';

export const ComponentsContext = React.createContext<ComponentCreator<ExtendedTypes>[]>([]);
