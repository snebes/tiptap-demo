/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

export interface EmphasisOverlineOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emphasisOverline: {
            setOverline: () => ReturnType,
            toggleOverline: () => ReturnType,
            unsetOverline: () => ReturnType,
        }
    }
}

export const EmphasisOverline = Mark.create<EmphasisOverlineOptions>({
    name: 'emphasisOverline',
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'overline',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="overline"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'overline';
        return ['emphasis', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setOverline: () => ({ commands }) => commands.setMark(this.name),
            toggleOverline: () => ({ commands }) => commands.toggleMark(this.name),
            unsetOverline: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});
