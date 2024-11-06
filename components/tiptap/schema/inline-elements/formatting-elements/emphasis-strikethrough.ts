/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Strike } from '@tiptap/extension-strike';

export const EmphasisStrikethrough = Strike.extend({
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'strikethrough',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="strikethrough"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'strikethrough';
        return ['emphasis', HTMLAttributes, 0];
    },
});