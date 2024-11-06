/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

export interface EmphasisRomanOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emphasisRoman: {
            setRoman: () => ReturnType,
            toggleRoman: () => ReturnType,
            unsetRoman: () => ReturnType,
        }
    }
}

export const EmphasisRoman = Mark.create<EmphasisRomanOptions>({
    name: 'emphasisRoman',
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'roman',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="roman"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'roman';
        return ['emphasis', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setRoman: () => ({ commands }) => commands.setMark(this.name),
            toggleRoman: () => ({ commands }) => commands.toggleMark(this.name),
            unsetRoman: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});
