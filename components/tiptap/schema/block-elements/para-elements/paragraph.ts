/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Paragraph as BaseParagraph } from '@tiptap/extension-paragraph';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        exception: {
            setException: () => ReturnType;
        }
    }
}

export const Paragraph = BaseParagraph.extend({
    group: 'block paraElements',
});
