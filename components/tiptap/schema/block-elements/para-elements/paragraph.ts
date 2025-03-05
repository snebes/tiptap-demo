/*
 * (c) International Code Council
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Paragraph as BaseParagraph } from '@tiptap/extension-paragraph';

const VALID_ALIGN_VALUES = ['left', 'center', 'right', 'justify'];

export const Paragraph = BaseParagraph.extend({
    group: 'block paraElements',
    addAttributes() {
        return {
            indent: {
                default: null,
                parseHTML: element => element.getAttribute('indent'),
                renderHTML: attributes => {
                    if (attributes.indent && attributes.indent === 'yes') {
                        return { indent: 'yes' };
                    } else {
                        return {};
                    }
                },
                keepOnSplit: true,
            },
            align: {
                default: null,
                parseHTML: element => {
                    const align = element.getAttribute('align');
                    return VALID_ALIGN_VALUES.includes(align as string) ? align : null;
                },
                renderHTML: attributes => {
                    if (attributes.align && VALID_ALIGN_VALUES.includes(attributes.align as string)) {
                        return { align: attributes.align };
                    } else {
                        return {};
                    }
                },
                keepOnSplit: true,
            }
        }
    }
});
