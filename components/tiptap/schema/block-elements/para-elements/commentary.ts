/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Node } from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        commentary: {
            setCommentary: () => ReturnType;
        }
    }
}

export const Commentary = Node.create<{}>({
    name: 'commentary',
    group: 'block paraElements',
    content: 'block+',

    parseHTML() {
        return [{tag: 'commentary'}];
    },

    renderHTML() {
        return ['commentary', 0]
    },

    addCommands() {
        return {
            setCommentary: () => ({ commands }) => commands.setNode(this.name),
        }
    }
});
