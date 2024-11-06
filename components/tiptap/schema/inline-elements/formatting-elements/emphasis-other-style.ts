/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

export interface EmphasisOtherStyleOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emphasisOtherStyle: {
            setOtherStyle: () => ReturnType,
            toggleOtherStyle: () => ReturnType,
            unsetOtherStyle: () => ReturnType,
        }
    }
}

export const EmphasisOtherStyle = Mark.create<EmphasisOtherStyleOptions>({
    name: 'emphasisOtherStyle',
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'other-style',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="other-style"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'other-style';
        return ['emphasis', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setOtherStyle: () => ({ commands }) => commands.setMark(this.name),
            toggleOtherStyle: () => ({ commands }) => commands.toggleMark(this.name),
            unsetOtherStyle: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});
