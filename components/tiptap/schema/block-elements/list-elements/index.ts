/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Extension } from '@tiptap/core';
import { OrderedList } from './ordered-list';
import { UnorderedList } from './unordered-list';

export * from './unordered-list';

export const ListElements = Extension.create({
    name: 'xml2-list-elements',
    addExtensions() {
        return [
            OrderedList,
            UnorderedList,
        ];
    }
});
