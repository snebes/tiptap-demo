<!--
  - (c) International Code Council
  -
  - For the full copyright and license information, please view the LICENSE
  - file that was distributed with this source code.
  -->

<template>
    <div class="border-b px-2 py-1 toolbar">
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleInsert({ errata: false, inline: false }).run()"
            :active="editor.isActive('insert', { errata: false, inline: false })"
            tooltip="Insert"
        >Insert</tiptap-toolbar-button>
        <tiptap-toolbar-button
            @click="editor.chain().focus().toggleInsert({ errata: true, inline: false }).run()"
            :active="editor.isActive('insert', { errata: true, inline: false })"
            tooltip="List Errata"
        >Errata</tiptap-toolbar-button>
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
        <v-btn variant="text" rounded="0" class="toolbar-dropdown-btn">
            <v-icon size="large">mdi-menu-down</v-icon>
            <v-menu activator="parent" class="xml2-css">
                <v-list density="compact">
                    <v-list-item v-for="(name, type) in {
                            'bold-italic': 'Bold-Italic',
                            'underline': 'Underline',
                            'double-underline': 'Double Underline',
                            'small-caps': 'Small Caps',
                            'monospace': 'Monospace',
                            'overline': 'Overline',
                            'sans-serif': 'Sans-Serif',
                            'roman': 'Roman',
                    }"
                        @click="editor.chain().focus().toggleEmphasis({ type: type }).run()"
                        :active="editor.isActive('emphasis', { type: type })"
                    >
                        <div class="xml2-css"><emphasis :type="type">{{ name }}</emphasis></div>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <tiptap-toolbar-button
            @click="editor.chain().focus().unsetAllMarks().run()"
            icon="mdi-format-clear"
            tooltip="Remove Formatting"
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
import type { EmphasisType } from "~/components/tiptap/schema/inline-elements/formatting-elements/emphasis";

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
