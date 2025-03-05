/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Node } from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        exception: {
            setException: () => ReturnType;
            toggleException: () => ReturnType;
            unsetException: () => ReturnType;
        }
    }
}

export const Exception = Node.create({
    name: 'exception',
    group: 'block paraElements',
    content: '(paraElements)+', // @todo  | listElements | tableElements | mathElements

    parseHTML() {
        return [{ tag: 'exception' }];
    },

    renderHTML() {
        return ['exception', 0]
    },

    addCommands() {
        return {
            setException: () => ({ commands }) => commands.wrapIn(this.name),
            toggleException: () => ({ commands }) => commands.toggleWrap(this.name),
            unsetException: () => ({ commands }) => commands.lift(this.name),
        }
    }
});
