import { Node } from '@tiptap/core';
import { type CommandProps } from '@tiptap/vue-3';


export interface MediaObjectOptions {
    inline: boolean;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        mediaObject: {
            setMediaObject: (options: any) => ReturnType,
        }
    }
}

export const MediaObject = Node.create<MediaObjectOptions>({
    name: 'mediaObject',

    addOptions() {
        return {
            inline: false,
        }
    },

    inline() {
        return this.options.inline;
    },

    group() {
        return this.options.inline
            ? 'inline inlineElements'
            : 'block blockElements';
    },

    draggable: true,

    addAttributes() {
        return {
            id: {
                default: null,
            },
            inline: {
                default: false,
            },
            titleGroup: {
                default: '',
            },
            longDescription: {
                default: '',
            },
            images: {
                default: [],
            },
            caption: {
                default: '',
            },
            legend: {
                default: '',
            },
            disclaimer: {
                default: '',
            },
            source: {
                default: '',
            },
            credit: {
                default: '',
            },
        };
    },

    parseHTML() {
        const getAttrs = (node: HTMLElement) => {
            let inline = node.nodeName === 'inline-mediaobject';
            let titleGroup = node.querySelector('titlegroup')?.innerHTML || '';
            let longDescription = node.querySelector('longdesc')?.innerHTML || '';
            let images: any[] = [];
            let caption = node.querySelector('caption-xml2')?.innerHTML || '';
            let legend = node.querySelector('legend')?.innerHTML || '';
            let disclaimer = node.querySelector('disclaimer')?.innerHTML || '';
            let source = node.querySelector('source')?.innerHTML || '';
            let credit = node.querySelector('credit')?.innerHTML || '';

            Array.from(node.querySelectorAll('img')).map(img => {
                images.push({
                    src: img.getAttribute('src'),
                    alt: img.getAttribute('alt') || '',
                    align: img.getAttribute('align') || '',
                    valign: img.getAttribute('valign') || '',
                    rendition: img.getAttribute('rendition') || '',
                    mimeType: img.getAttribute('mime-type') || '',
                    width: img.getAttribute('width') || '',
                    depth: img.getAttribute('depth') || '',
                    contentWidth: img.getAttribute('contentwidth') || '',
                    contentDepth: img.getAttribute('contentdepth') || '',
                    scale: img.getAttribute('scale') || '',
                    pageWide: img.getAttribute('pgwide') === 'yes',
                    scaleToFit: img.getAttribute('scalefit') === '1',
                });
            });

            return { inline, titleGroup, longDescription, images, caption, legend, disclaimer, source, credit };
        };

        return [
            { tag: 'mediaobject', getAttrs: getAttrs },
            { tag: 'inline-mediaobject', getAttrs: getAttrs },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        const nodeName = HTMLAttributes.inline ? 'inline-mediaobject' : 'mediaobject';
        const mediaObject = document.createElement(nodeName);
        let imgEls = [];
        let titleGroup = null;
        let longDescription = null;
        let caption = null;
        let legend = null;
        let disclaimer = null;
        let source = null;
        let credit = null;

        if (HTMLAttributes.id) {
            mediaObject.setAttribute('id', HTMLAttributes.id);
        }

        for (let key in HTMLAttributes.images) {
            const image = HTMLAttributes.images[key];
            const imgEl = document.createElement('img');
            imgEl.setAttribute('src', image.src);
            imgEl.setAttribute('alt', image.alt);

            imgEls.push(imgEl);
        }

        if (!this.options.inline && HTMLAttributes.titleGroup.length > 0) {
            titleGroup = document.createElement('titlegroup');
            titleGroup.innerHTML = HTMLAttributes.titleGroup;
        }
        if (HTMLAttributes.longDescription.length > 0) {
            longDescription = document.createElement('longdesc');
            longDescription.innerHTML = HTMLAttributes.longDescription;
        }
        if (HTMLAttributes.caption.length > 0) {
            caption = document.createElement('caption-xml2');
            caption.innerHTML = HTMLAttributes.caption;
        }
        if (HTMLAttributes.legend.length > 0) {
            legend = document.createElement('legend');
            legend.innerHTML = HTMLAttributes.legend;
        }
        if (HTMLAttributes.disclaimer.length > 0) {
            disclaimer = document.createElement('disclaimer');
            disclaimer.innerHTML = HTMLAttributes.disclaimer;
        }
        if (HTMLAttributes.source.length > 0) {
            source = document.createElement('source');
            source.innerHTML = HTMLAttributes.source;
        }
        if (HTMLAttributes.credit.length > 0) {
            credit = document.createElement('credit');
            credit.innerHTML = HTMLAttributes.credit;
        }

        // put fields in expected order.
        if (HTMLAttributes.inline) {
            caption && mediaObject.appendChild(caption);
            longDescription && mediaObject.appendChild(longDescription);
            mediaObject.append(...imgEls);
        } else {
            titleGroup && mediaObject.appendChild(titleGroup);
            longDescription && mediaObject.appendChild(longDescription);
            mediaObject.append(...imgEls);
            caption && mediaObject.appendChild(caption);
            legend && mediaObject.appendChild(legend);
        }
        disclaimer && mediaObject.appendChild(disclaimer);
        source && mediaObject.appendChild(source);
        credit && mediaObject.appendChild(credit);

        return mediaObject;
    },

    addCommands() {
        return {
            setMediaObject: (
                options: { images: { src: string, alt?: string }[], caption?: string }
            ) => ({ commands, editor }: CommandProps) => {
                return commands.insertContentAt(editor.state.selection.anchor, {
                    type: this.name,
                    attrs: options,
                });
            }
        }
    }
});
