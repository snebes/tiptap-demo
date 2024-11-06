/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { HardBreak } from '@tiptap/extension-hard-break';

export const Br = HardBreak.extend({
    group: 'inline formattingElements inlineElements',

    addOptions() {
        return {
            keepMarks: false,
            HTMLAttributes: {},
        }
    }
});
