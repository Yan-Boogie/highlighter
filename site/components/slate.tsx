import { useMemo, useState } from 'react';
import {
  Descendant,
  HighlighterSlate,
  HighlighterElement,
  HighlighterLeaf,
  createHighlighterSlate,
  withToolbar,
  createComposedComponent,
  HighlighterEditor,
  Divider,
  Heading,
  Paragraph,
  List,
  Bold,
  Italic,
  Underline,
} from 'highlighter-component';

const initialValue: Descendant[] = [
  {
    type: 'PARAGRAPH',
    children: [{ text: '' }],
  },
];

export interface ISlate {
  installedModules: string[];
}

const modulesMapper = {
  Paragraph: Paragraph.createParagraph,
  Heading: Heading.createHeadings,
  Divider: Divider.createDivider,
  List: List.createListModule,
  Bold: Bold.createBold,
  Italic: Italic.createItalic,
  Underline: Underline.createUnderLine,
};

const Slate = (props: ISlate) => {
  const { installedModules } = props;
  const editor = useMemo(() => createHighlighterSlate(), []);
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const creatorsUnion = withToolbar(
    createComposedComponent(...installedModules.map((module) => modulesMapper[module]())),
  );

  if (!installedModules.length) return null;

  return (
    <HighlighterSlate value={value} onChange={(e) => setValue(e)} editor={editor} creatorUnion={creatorsUnion}>
      <HighlighterEditor
        placeholder="Please Enter something..."
        renderElement={(p) => <HighlighterElement {...p} />}
        renderLeaf={(p) => <HighlighterLeaf {...p} />}
      />
    </HighlighterSlate>
  );
};

export default Slate;
