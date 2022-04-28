import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';

export const createHighlighterSlate = () => withHistory(withReact(createEditor()));
