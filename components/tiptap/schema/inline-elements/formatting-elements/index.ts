/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Extension } from '@tiptap/core';
import { EmphasisBold } from './emphasis-bold';
import { EmphasisItalic } from './emphasis-italic';
import { EmphasisBoldItalic } from './emphasis-bold-italic';
import { EmphasisUnderline } from './emphasis-underline';
import { EmphasisDoubleUnderline } from './emphasis-double-underline';
import { EmphasisSmallCaps } from './emphasis-small-caps';
import { EmphasisMonospace } from './emphasis-monospace';
import { EmphasisStrikethrough } from './emphasis-strikethrough';
import { EmphasisOverline } from './emphasis-overline';
import { EmphasisSansSerif } from './emphasis-sans-serif';
import { EmphasisRoman } from './emphasis-roman';
import { EmphasisOtherStyle } from './emphasis-other-style';
import { Sub } from './sub';
import { Sup } from './sup';
import { Br } from './br';

export const FormattingElements = Extension.create({
    name: 'xml2-formatting-elements',
    addExtensions() {
        return [
            EmphasisBold,
            EmphasisItalic,
            EmphasisBoldItalic,
            EmphasisUnderline,
            EmphasisDoubleUnderline,
            EmphasisSmallCaps,
            EmphasisMonospace,
            EmphasisStrikethrough,
            EmphasisOverline,
            EmphasisSansSerif,
            EmphasisRoman,
            EmphasisOtherStyle,
            Sub,
            Sup,
            Br,
        ];
    },
});
