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
            images: {
                default: [],
            },
        };
    },

    parseHTML() {
        const getAttrs = (node: HTMLElement) => {
            let id = node.getAttribute('id') || null;
            let inline = node.nodeName === 'inline-mediaobject';
            let images: any[] = [];

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

            return { id, inline, images };
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
        mediaObject.append(...imgEls);

        return mediaObject;
    },

    addCommands() {
        return {
            setMediaObject: (
                options: { images: { src: string, alt?: string }[] }
            ) => ({ commands, editor }: CommandProps) => {
                return commands.insertContentAt(editor.state.selection.anchor, {
                    type: this.name,
                    attrs: options,
                });
            }
        }
    }
});
