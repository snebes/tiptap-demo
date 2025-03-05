/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Paragraph as BaseParagraph } from '@tiptap/extension-paragraph';

export const Paragraph = BaseParagraph.extend({
    group: 'block paraElements',
    addOptions() {
        return {
            HTMLAttributes: {
                indent: { type: String },
                align: { type: String },
            }
        }
    }
});
