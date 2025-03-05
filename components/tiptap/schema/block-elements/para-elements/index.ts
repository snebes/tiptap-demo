/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Extension } from '@tiptap/core';
import { Commentary } from './commentary';
import { Paragraph } from './paragraph';
import { Exception } from './exception';

export const ParaElements = Extension.create({
    name: 'paraElements',
    addExtensions() {
        return [
            Commentary,
            Paragraph,
            Exception,
        ];
    }
});
