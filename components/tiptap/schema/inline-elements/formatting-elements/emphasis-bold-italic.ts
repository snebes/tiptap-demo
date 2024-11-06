/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

export interface EmphasisBoldItalicOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emphasisBoldItalic: {
            setBoldItalic: () => ReturnType,
            toggleBoldItalic: () => ReturnType,
            unsetBoldItalic: () => ReturnType,
        }
    }
}

export const EmphasisBoldItalic = Mark.create<EmphasisBoldItalicOptions>({
    name: 'emphasisBoldItalic',
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'bold-italic',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="bold-italic"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'bold-italic';
        return ['emphasis', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setBoldItalic: () => ({ commands }) => commands.setMark(this.name),
            toggleBoldItalic: () => ({ commands }) => commands.toggleMark(this.name),
            unsetBoldItalic: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});