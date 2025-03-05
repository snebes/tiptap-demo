<!--
  - (c) International Code Council
  -
  - For the full copyright and license information, please view the LICENSE
  - file that was distributed with this source code.
  -->

<template>
    <div class="border-b px-2 py-1 toolbar">
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleBold().run()"
            :active="editor.isActive('bold')"
            icon="mdi-format-bold"
            tooltip="Bold"
        />
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleItalic().run()"
            :active="editor.isActive('italic')"
            icon="mdi-format-italic"
            tooltip="Italic"
        />
        <div class="toolbar-divider" />
        <image-toolbar :editor="editor" />

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
