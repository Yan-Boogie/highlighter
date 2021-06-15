import React, { createContext, useContext } from 'react';

/**
 * @todo
 * MOCK types -> change to 'highlighter-core' package
 */
import type { Element, Text } from '../mock/interfaces';

export type RenderLeafAttributes = {
  'data-slate-leaf': true;
};

export interface RenderLeafProps {
  children: any;
  text: Text;
  attributes: RenderLeafAttributes;
}

export type RenderElementAttributes = {
  'data-highlighter-node': 'element';
  dir?: 'ltr';
  ref: any;
};

export interface RenderElementProps {
  children: any;
  element: Element;
  attributes: RenderElementAttributes;
}

export type RenderList = [(props: RenderElementProps) => JSX.Element, (props: RenderLeafProps) => JSX.Element];

function DefaultElement(props: RenderElementProps) {
  const { children, attributes } = props;

  return (
    <div {...attributes} style={{ position: 'relative' }}>
      {children}
    </div>
  );
}

/**
 * @todo
 * Add Default Highlighted, Selected types Leaf
 */
function DefaultLeaf(props: RenderLeafProps) {
  const { children, attributes } = props;

  return <span {...attributes}>{children}</span>;
}

export const RendersContext = createContext<RenderList | null>(null);

export interface UseRendersProps {
  renderList?: RenderList;
}

export function useRenders(props: UseRendersProps) {
  const { renderList } = props;
  const renders = useContext(RendersContext);

  if (renderList) {
    const provider = [];

    provider.push(renderList[0] ? renderList[0] : (p: RenderElementProps) => <DefaultElement {...p} />);

    provider.push(renderList[1] ? renderList[1] : (p: RenderLeafProps) => <DefaultLeaf {...p} />);

    return {
      RendersProvider: ({ children }: { children: React.ReactNode }) => (
        <RendersContext.Provider value={provider as RenderList}>{children}</RendersContext.Provider>
      ),
    };
  }

  if (!renders) {
    throw new Error('The useRenders hook must be used inside the <Interactive> component context.');
  }

  return renders;
}
