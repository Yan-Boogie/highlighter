import { useMemo, useState } from 'react';
import {
  Descendant,
  HighlighterSlate,
  HighlighterElement,
  createHighlighterSlate,
  withToolbar,
  createComposedComponent,
  HighlighterEditor,
  Divider,
  Heading,
  Paragraph,
  Link,
  List,
} from 'highlighter-component';

const initialValue: Descendant[] = [
  {
    type: 'PARAGRAPH',
    children: [
      {
        text: `This example shows how you can make a hovering menu appear above your
        content, which you can use to make text `,
      },
      { text: 'bold' },
      { text: ', ' },
      { text: 'italic' },
      { text: ', or anything else you might want to do!' },
    ],
  },
  {
    type: 'PARAGRAPH',
    children: [
      { text: 'Try it out yourself! Just ' },
      { text: 'select any piece of text and the menu will appear' },
      { text: '.' },
    ],
  },
];

const Slate = () => {
  const editor = useMemo(() => createHighlighterSlate(), []);
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const creatorsUnion = withToolbar(
    createComposedComponent(
      Divider.createDivider(),
      Heading.createHeadings(),
      Paragraph.createParagraph(),
      Link.createLink(),
      List.createListModule(),
    ),
  );

  return (
    <HighlighterSlate value={value} onChange={(e) => setValue(e)} editor={editor} creatorUnion={creatorsUnion}>
      <HighlighterEditor renderElement={(props) => <HighlighterElement {...props} />} />
    </HighlighterSlate>
  );
};

export default Slate;