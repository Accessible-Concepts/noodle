import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block';
import { PlateRenderElementProps } from '@udecode/plate-core';
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading';
import { ELEMENT_LI, ELEMENT_OL, ELEMENT_UL } from '@udecode/plate-list';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { Blockquote } from './Blockquote';
import { Bold } from './Bold';
import { CodeBlock } from './CodeBlock';
import { Heading } from './Heading';
import { InlineCode } from './InlineCode';
import { Italic } from './Italic';
import { ListItem } from './ListItem';
import { OrderedList } from './OrderedList';
import { Paragraph } from './Paragraph';
import { Strikethrough } from './Strikethrough';
import { Subscript } from './Subscript';
import { Superscript } from './Superscript';
import { Underline } from './Underline';
import { UnorderedList } from './UnorderedList';

export const components = {
  [ELEMENT_H1]: (props: PlateRenderElementProps) => (
    <Heading variant="h1" {...props} />
  ),
  [ELEMENT_H2]: (props: PlateRenderElementProps) => (
    <Heading variant="h2" {...props} />
  ),
  [ELEMENT_H3]: (props: PlateRenderElementProps) => (
    <Heading variant="h3" {...props} />
  ),
  [ELEMENT_H4]: (props: PlateRenderElementProps) => (
    <Heading variant="h4" {...props} />
  ),
  [ELEMENT_H5]: (props: PlateRenderElementProps) => (
    <Heading variant="h5" {...props} />
  ),
  [ELEMENT_H6]: (props: PlateRenderElementProps) => (
    <Heading variant="h6" {...props} />
  ),
  [ELEMENT_PARAGRAPH]: Paragraph,
  [ELEMENT_BLOCKQUOTE]: Blockquote,
  [ELEMENT_CODE_BLOCK]: CodeBlock,
  [ELEMENT_UL]: UnorderedList,
  [ELEMENT_OL]: OrderedList,
  [ELEMENT_LI]: ListItem,

  // Marks
  [MARK_BOLD]: Bold,
  [MARK_ITALIC]: Italic,
  [MARK_UNDERLINE]: Underline,
  [MARK_STRIKETHROUGH]: Strikethrough,
  [MARK_SUBSCRIPT]: Subscript,
  [MARK_SUPERSCRIPT]: Superscript,
  [MARK_CODE]: InlineCode,
};
