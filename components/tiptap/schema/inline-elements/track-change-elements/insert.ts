/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Mark } from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        insert: {
            setInsert: (attributes: { errata: boolean, inline: boolean }) => ReturnType;
            toggleInsert: (attributes: { errata: boolean, inline: boolean }) => ReturnType;
            unsetInsert: () => ReturnType;
        }
    }
}

export const Insert = Mark.create({
    name: 'insert',

    addAttributes() {
        return {
            errata: {
                default: null,
                parseHTML: element => 'yes' === element.getAttribute('errata'),
                renderHTML: attributes => {
                    if (attributes.errata && 'yes' === attributes.errata) {
                        return {
                            errata: 'yes',
                        }
                    }
                }
            },
            inline: {
                default: false,
                parseHTML: element => 'yes' === element.getAttribute('inline'),
                renderHTML: attributes => {
                    if ('yes' === attributes.errata) {
                        return {
                            inline: attributes.inline ? 'yes' : 'no',
                        }
                    }
                    return {}
                }
            }
        }
    },

    parseHTML() {
        return [{ tag: 'insert' }];
    },

    renderHTML({ HTMLAttributes }) {
        return ['insert', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setInsert: attributes => ({ commands }) => commands.setMark(this.name, attributes),
            toggleInsert: attributes => ({ commands }) => commands.toggleMark(this.name, attributes),
            unsetInsert: () => ({ commands }) => commands.unsetMark(this.name),
        }
    }
});
