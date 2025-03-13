/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark, mergeAttributes } from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        errata: {
            setErrata: (attributes: { inline: boolean }) => ReturnType;
            toggleErrata: (attributes: { inline: boolean }) => ReturnType;
            unsetErrata: () => ReturnType;
        }
    }
}

export const Errata = Mark.create({
    name: 'errata',

    addAttributes() {
        return {
            errata: { default: 'yes' },
            inline: {
                default: false,
                parseHTML: element => 'yes' === element.getAttribute('inline'),
                renderHTML: attributes => {
                    return {
                        inline: attributes.inline ? 'yes' : 'no',
                    }
                }
            }
        }
    },

    parseHTML() {
        return [{
            tag: 'insert[errata="yes"]',
            priority: 51,
        }];
    },

    renderHTML({ HTMLAttributes }) {
        return ['insert', mergeAttributes({ errata: 'yes'}, HTMLAttributes), 0];
    },

    addCommands() {
        return {
            setErrata: attributes => ({ commands }) => commands.setMark(this.name, attributes),
            toggleErrata: attributes => ({ commands }) => commands.toggleMark(this.name, attributes),
            unsetErrata: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});
