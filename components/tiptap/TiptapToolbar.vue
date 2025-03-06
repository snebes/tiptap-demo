<!--
  - (c) International Code Council
  -
  - For the full copyright and license information, please view the LICENSE
  - file that was distributed with this source code.
  -->

<template>
    <div class="border-b px-2 py-1 toolbar">
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'bold' }).run()"
            :active="editor.isActive('emphasis', { type: 'bold' })"
            icon="mdi-format-bold"
            tooltip="Bold"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'italic' }).run()"
            :active="editor.isActive('emphasis', { type: 'italic' })"
            icon="mdi-format-italic"
            tooltip="Italic"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'bold-italic' }).run()"
            :active="editor.isActive('emphasis', { type: 'bold-italic' })"
            icon="mdi-format-font"
            tooltip="Bold-Italic"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'underline' }).run()"
            :active="editor.isActive('emphasis', { type: 'underline' })"
            icon="mdi-format-underline"
            tooltip="Underline"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'double-underline' }).run()"
            :active="editor.isActive('emphasis', { type: 'double-underline' })"
            icon="mdi-format-underline-wavy"
            tooltip="Double Underline"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'small-caps' }).run()"
            :active="editor.isActive('emphasis', { type: 'small-caps' })"
            icon="mdi-format-size"
            tooltip="Small Caps"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'monospace' }).run()"
            :active="editor.isActive('emphasis', { type: 'monospace' })"
            icon="mdi-code-greater-than"
            tooltip="Monospace"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'overline' }).run()"
            :active="editor.isActive('emphasis', { type: 'overline' })"
            icon="mdi-format-overline"
            tooltip="Overline"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'sans-serif' }).run()"
            :active="editor.isActive('emphasis', { type: 'sans-serif' })"
            icon="mdi-format-sans-serif"
            tooltip="Sans-serif"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleEmphasis({ type: 'roman' }).run()"
            :active="editor.isActive('emphasis', { type: 'roman' })"
            icon="mdi-format-roman"
            tooltip="roman"
        />

        <div class="toolbar-divider" />

        <image-toolbar :editor="editor" />

        <div class="toolbar-divider" />

        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleCommentary().run()"
            :active="editor.isActive('commentary')"
            icon="mdi-comment-outline"
            tooltip="Toggle Commentary"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleException().run()"
            :active="editor.isActive('exception')"
            icon="mdi-alert-box-outline"
            tooltip="Toggle Exception"
        />

        <div class="toolbar-divider" />

        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleUnorderedList().run()"
            :active="editor.isActive('unorderedList')"
            icon="mdi-format-list-bulleted"
            tooltip="Toggle Unordered List"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleOrderedList().run()"
            :active="editor.isActive('orderedList')"
            icon="mdi-format-list-numbered"
            tooltip="Toggle Ordered List"
        />

        <div class="toolbar-divider" />

        <tiptap-toolbar-button
            @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().undo()"
            icon="mdi-undo"
            tooltip="Undo"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().redo()"
            icon="mdi-redo"
            tooltip="Redo"
        />
        <view-source-dialog :editor="editor" />
    </div>
</template>

<script setup lang="ts">
import { Editor } from '@tiptap/vue-3';
import ImageEditForm from '~/components/tiptap/schema/figure-elements/ImageEditForm.vue';
import TiptapToolbarButton from './toolbar/TiptapToolbarButton.vue';
import ViewSourceDialog from '~/components/tiptap/toolbar/ViewSourceDialog.vue';
import ImageToolbar from '~/components/tiptap/toolbar/ImageToolbar.vue';

const props = defineProps({
    editor: {
        type: Editor,
        required: true,
    },
});
</script>

<style lang="scss">
.toolbar-divider {
    display: inline-flex;
    align-items: center;
    justify-items: center;
    border-left: 1px solid rgba(0, 0, 0, .1);
    height: 1.2rem;
    width: 1px;
    margin: 0 0.3rem;
}
</style>
