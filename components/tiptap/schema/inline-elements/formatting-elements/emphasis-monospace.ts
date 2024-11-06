/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

export interface EmphasisMonospaceOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emphasisMonospace: {
            setMonospace: () => ReturnType,
            toggleMonospace: () => ReturnType,
            unsetMonospace: () => ReturnType,
        }
    }
}

export const EmphasisMonospace = Mark.create<EmphasisMonospaceOptions>({
    name: 'emphasisMonospace',
    group: 'inline formattingElements inlineElements',

    addAttributes() {
        return {
            type: {
                default: 'monospace',
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'emphasis[type="monospace"]' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        HTMLAttributes.type = 'monospace';
        return ['emphasis', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setMonospace: () => ({ commands }) => commands.setMark(this.name),
            toggleMonospace: () => ({ commands }) => commands.toggleMark(this.name),
            unsetMonospace: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});
