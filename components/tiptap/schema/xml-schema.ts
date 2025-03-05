import { Extension } from '@tiptap/core';
import { Document } from '@tiptap/extension-document';
import { Text } from '@tiptap/extension-text';
import { History } from '@tiptap/extension-history';

import { BlockElements } from './block-elements';
import { InlineElements } from './inline-elements';
import { MediaObject } from '~/components/tiptap/schema/figure-elements/media-object';

export const XmlSchema = Extension.create({
    name: 'xml2-schema',
    addExtensions() {
        return [
            Document,
            Text,
            History,

            BlockElements,
            // InlineElements,

            // MediaObject,
        ];
    },
});
