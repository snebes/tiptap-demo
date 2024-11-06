/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Underline } from '@tiptap/extension-underline';

export const EmphasisUnderline = Underline.extend({
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'underline',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="underline"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'underline';
        return ['emphasis', HTMLAttributes, 0];
    },
});