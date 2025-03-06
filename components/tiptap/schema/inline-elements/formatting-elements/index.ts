/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Extension } from '@tiptap/core';
import { Emphasis } from './emphasis';
import { Sub } from './sub';
import { Sup } from './sup';
import { Br } from './br';

export const FormattingElements = Extension.create({
    name: 'xml2-formatting-elements',
    addExtensions() {
        return [
            Emphasis,
            Sub,
            Sup,
            Br,
        ];
    },
});
