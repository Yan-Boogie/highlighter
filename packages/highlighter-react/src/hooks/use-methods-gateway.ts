import { createContext, useContext } from 'react';

import type { IMethodsGateway } from 'highlighter-core';

export const MethodsGatewayContext = createContext<IMethodsGateway | null>(null);

export const useMethodsGateway = (): IMethodsGateway => {
  const context = useContext(MethodsGatewayContext);

  if (!context) {
    throw new Error('The useMethodsGateway hook must be used inside the <Highlighter> component context.');
  }

  return context;
};
