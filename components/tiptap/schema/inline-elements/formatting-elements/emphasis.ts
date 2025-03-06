/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

export type EmphasisType = 'bold' | 'italic' | 'bold-italic' | 'underline' | 'double-underline' | 'small-caps'
    // | 'strikethrough'
    | 'monospace' | 'overline' | 'sans-serif' | 'roman' | 'other-style';

export interface EmphasisOptions {
    types: EmphasisType[];
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emphasis: {
            setEmphasis: (attributes: { type: EmphasisType }) => ReturnType,
            toggleEmphasis: (attributes: { type: EmphasisType }) => ReturnType,
            unsetEmphasis: () => ReturnType,
        }
    }
}

export const Emphasis = Mark.create<EmphasisOptions>({
    name: 'emphasis',

    addOptions() {
        return {
            types: [
                'bold',
                'italic',
                'bold-italic',
                'underline',
                'double-underline',
                'small-caps',
                'monospace',
                // 'strikethrough',
                'overline',
                'sans-serif',
                'roman',
                'other-style',
            ],
        }
    },

    addAttributes() {
        return {
            type: {
                default: 'bold',
                parseHTML: element => element.getAttribute('type'),
                renderHTML: attributes => {
                    if (attributes.type && this.options.types.includes(attributes.type)) {
                        return { type: attributes.type };
                    }
                    return { type: 'bold' };
                }
            }
        }
    },

    parseHTML() {
        return [{ tag: 'emphasis' }];
    },

    renderHTML({ HTMLAttributes }) {
        return ['emphasis', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setEmphasis: attributes => ({ commands }) => commands.setMark(this.name, attributes),
            toggleEmphasis: attributes => ({ commands }) => commands.toggleMark(this.name, attributes),
            unsetEmphasis: () => ({ commands }) => commands.unsetMark(this.name),
        }
    },

    addKeyboardShortcuts() {
        return {
            'Mod-b': () => this.editor.commands.toggleEmphasis({ type: 'bold'}),
            'Mod-B': () => this.editor.commands.toggleEmphasis({ type: 'bold'}),
        }
    },
});
