/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Node } from '@tiptap/core';
import { OrderedListItem } from './ordered-list-item'

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        orderedList: {
            toggleOrderedList: () => ReturnType;
        }
    }
}

export const OrderedList = Node.create({
    name: 'orderedList',
    group: 'block listElements',
    content: 'orderedListItem+',

    addExtensions() {
        return [OrderedListItem];
    },

    parseHTML() {
        return [{ tag: 'ol' }];
    },

    renderHTML({ HTMLAttributes }) {
        return ['ol', HTMLAttributes, 0]
    },

    addCommands() {
        return {
            toggleOrderedList: () => ({ commands }) => commands.toggleList(this.name, 'orderedListItem'),
        }
    }
});
