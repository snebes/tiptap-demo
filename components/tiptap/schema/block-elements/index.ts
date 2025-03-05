/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Extension } from '@tiptap/core';
import { ParaElements } from './para-elements';
import { ListElements } from './list-elements';

export const BlockElements = Extension.create({
    name: 'xml2-block-elements',
    addExtensions() {
        return [
            ParaElements,
            ListElements,
        ];
    }
});
