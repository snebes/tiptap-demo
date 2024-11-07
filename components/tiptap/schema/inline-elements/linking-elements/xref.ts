/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Node } from '@tiptap/core';

export interface XRefOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        crossReference: {
            setCrossReference: () => ReturnType,
            toggleCrossReference: () => ReturnType,
            unsetCrossReference: () => ReturnType,
        }
    }
}

export const XRef = Node.create<XRefOptions>({
    name: 'crossReference',
    group: 'inline linkingElements inlineElements',
    content: '(text | formattingElements)*',
    inline: true,

    addAttributes() {
        return {
            rid: {
                type: String,
                default: '',
            }
        };
    },

    parseHTML() {
        return [
            { tag: 'xref' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        return ['xref', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setCrossReference: () => ({ commands }) => commands.wrapIn(this.name),
            toggleCrossReference: () => ({ commands }) => commands.toggleWrap(this.name),
            unsetCrossReference: () => ({ commands }) => commands.lift(this.name),
        }
    }
});
