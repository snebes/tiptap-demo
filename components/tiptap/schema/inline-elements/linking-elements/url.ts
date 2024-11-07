/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Node } from '@tiptap/core';

export interface UrlOptions {
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        url: {
            setUrl: () => ReturnType,
            toggleUrl: () => ReturnType,
            unsetUrl: () => ReturnType,
        }
    }
}

export const Url = Node.create<UrlOptions>({
    name: 'url',
    group: 'inline linkingElements inlineElements',
    content: '(text | formattingElements)*',
    inline: true,

    addAttributes() {
        return {
            href: {
                type: String,
                default: '',
            },
            target: {
                type: String,
                default: null,
            },
            alt: {
                type: String,
                default: null,
            },
        };
    },

    parseHTML() {
        return [
            { tag: 'url' },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        return ['url', HTMLAttributes, 0];
    },

    addCommands() {
        return {
            setUrl: () => ({ commands }) => commands.wrapIn(this.name),
            toggleUrl: () => ({ commands }) => commands.toggleWrap(this.name),
            unsetUrl: () => ({ commands }) => commands.lift(this.name),
        }
    }
});
