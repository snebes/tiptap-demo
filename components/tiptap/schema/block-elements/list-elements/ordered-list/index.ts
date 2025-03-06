/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Extension } from '@tiptap/core';
import { OrderedList as OL } from './ordered-list';

export const OrderedList = Extension.create({
    name: 'xml2-ordered-list',
    addExtensions() {
        return [OL];
    }
});
