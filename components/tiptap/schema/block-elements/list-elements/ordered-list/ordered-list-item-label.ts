/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Node } from '@tiptap/core';

export const OrderedListItemLabel = Node.create<{}>({
    name: 'orderedListItemLabel',
    content: 'inline*',

    parseHTML() {
        return [{
            tag: 'ol > li > label',
            priority: 51,
        }];
    },

    renderHTML() {
        return ['label', 0]
    },
});
