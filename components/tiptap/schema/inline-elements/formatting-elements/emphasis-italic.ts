/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Italic } from '@tiptap/extension-italic';

export const EmphasisItalic = Italic.extend({
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'italic',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="italic"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'italic';
        return ['emphasis', HTMLAttributes, 0];
    },
});