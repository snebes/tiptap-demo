import { Extension } from '@tiptap/core';
import { Document } from '@tiptap/extension-document';
import { Text } from '@tiptap/extension-text';
import { History } from '@tiptap/extension-history';
import { Paragraph } from '@tiptap/extension-paragraph';
import { InlineElements } from './inline-elements';

export const XmlSchema = Extension.create({
    name: 'xml2-schema',
    addExtensions() {
        return [
            Document,
            Text,
            History,
            Paragraph,

            InlineElements,
        ];
    },
});