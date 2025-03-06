/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Node } from '@tiptap/core';
import { OrderedListItem } from './ordered-list-item'
import { OrderedListItemLabel } from './ordered-list-item-label'

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        orderedList: {
            toggleOrderedList: () => ReturnType;
        }
    }
}

const VALID_TYPE_VALUES = ['custom', 'arabic', 'upper-alpha', 'lower-alpha', 'upper-roman', 'lower-roman'];

export const OrderedList = Node.create({
    name: 'orderedList',
    group: 'block listElements',
    content: 'orderedListItem+',

    addAttributes() {
        return {
            type: {
                default: 'custom',
                parseHTML: element => element.getAttribute('type'),
                renderHTML: attributes => {
                    if (attributes.type && VALID_TYPE_VALUES.includes(attributes.type)) {
                        return { type: attributes.type };
                    }
                    return {};
                }
            }
        }
    },

    addExtensions() {
        return [
            OrderedListItem,
            OrderedListItemLabel,
        ];
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
