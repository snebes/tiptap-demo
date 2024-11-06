/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

export interface EmphasisSansSerifOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emphasisSansSerif: {
            setSansSerif: () => ReturnType,
            toggleSansSerif: () => ReturnType,
            unsetSansSerif: () => ReturnType,
        }
    }
}

export const EmphasisSansSerif = Mark.create<EmphasisSansSerifOptions>({
    name: 'emphasisSansSerif',
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'sans-serif',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="sans-serif"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'sans-serif';
        return ['emphasis', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setSansSerif: () => ({ commands }) => commands.setMark(this.name),
            toggleSansSerif: () => ({ commands }) => commands.toggleMark(this.name),
            unsetSansSerif: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});
