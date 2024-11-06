/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

export interface EmphasisDoubleUnderlineOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emphasisDoubleUnderline: {
            setDoubleUnderline: () => ReturnType,
            toggleDoubleUnderline: () => ReturnType,
            unsetDoubleUnderline: () => ReturnType,
        }
    }
}

export const EmphasisDoubleUnderline = Mark.create<EmphasisDoubleUnderlineOptions>({
    name: 'emphasisDoubleUnderline',
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'double-underline',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="double-underline"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'double-underline';
        return ['emphasis', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setDoubleUnderline: () => ({ commands }) => commands.setMark(this.name),
            toggleDoubleUnderline: () => ({ commands }) => commands.toggleMark(this.name),
            unsetDoubleUnderline: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});
