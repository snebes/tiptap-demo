/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Extension } from '@tiptap/core';
import { FormattingElements } from './formatting-elements';

export const InlineElements = Extension.create({
    name: 'xml2-inline-elements',
    addExtensions() {
        return [
            FormattingElements,
        ];
    },
});