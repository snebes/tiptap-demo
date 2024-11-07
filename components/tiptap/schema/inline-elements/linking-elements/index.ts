/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Extension } from '@tiptap/core';
import { XRef } from './xref';
import { Url } from './url';

export const LinkingElements = Extension.create({
    name: 'xml2-linking-elements',
    addExtensions() {
        return [
            XRef,
            Url,
            // legref,
            // publication-ref,
        ];
    },
});
