import React from 'react';
import type { ComponentCreatorUnion, ExtendedTypes, ToolbarCreator } from './interfaces/creators';

export const ComponentsContext = React.createContext<ComponentCreatorUnion[]>([]);

export const ToolbarContext = React.createContext<ToolbarCreator<ExtendedTypes>[]>([]);
