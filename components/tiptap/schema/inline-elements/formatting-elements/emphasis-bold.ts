/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Bold } from '@tiptap/extension-bold';

export const EmphasisBold = Bold.extend({
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'bold',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="bold"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'bold';
        return ['emphasis', HTMLAttributes, 0];
    },
});