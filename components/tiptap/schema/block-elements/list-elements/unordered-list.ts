/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Node } from '@tiptap/core';
import { UnorderedListItem } from './unordered-list-item';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        unorderedList: {
            toggleUnorderedList: () => ReturnType;
        }
    }
}

const VALID_TYPE_VALUES = ['disc', 'square', 'gray-square', 'circle', 'check', 'hyphen', 'custom', 'none'];

export const UnorderedList = Node.create({
    name: 'unorderedList',
    group: 'block listElements',
    content: 'unorderedListItem+',

    addAttributes() {
        return {
            type: {
                default: 'disc',
                parseHTML: element => element.getAttribute('type'),
                renderHTML: attributes => {
                    if (attributes.type && VALID_TYPE_VALUES.includes(attributes.type)) {
                        return { type: attributes.type };
                    }
                    return { type: 'disc' };
                }
            }
        }
    },

    addExtensions() {
        return [UnorderedListItem];
    },

    parseHTML() {
        return [{ tag: 'ul' }];
    },

    renderHTML({ HTMLAttributes }) {
        return ['ul', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            toggleUnorderedList: () => ({ commands }) => commands.toggleList(this.name, 'unorderedListItem'),
        }
    }
});
