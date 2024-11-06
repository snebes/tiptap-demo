/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

export interface EmphasisSmallCapsOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emphasisSmallCaps: {
            setSmallCaps: () => ReturnType,
            toggleSmallCaps: () => ReturnType,
            unsetSmallCaps: () => ReturnType,
        }
    }
}

export const EmphasisSmallCaps = Mark.create<EmphasisSmallCapsOptions>({
    name: 'emphasisSmallCaps',
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'small-caps',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="small-caps"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'small-caps';
        return ['emphasis', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setSmallCaps: () => ({ commands }) => commands.setMark(this.name),
            toggleSmallCaps: () => ({ commands }) => commands.toggleMark(this.name),
            unsetSmallCaps: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});
