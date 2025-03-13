/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Extension } from '@tiptap/core';
import { Errata } from './errata';
import { Insert } from './insert';

export const TrackChangesElements = Extension.create({
    name: 'xml2-track-changes-elements',
    addExtensions() {
        return [
            // Errata,
            Insert,
        ];
    },
});
