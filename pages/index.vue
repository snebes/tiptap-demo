<template>
    <div>
        <div class="py-5 text-center">
            <h1 class="font-weight-bold mb-2">Tiptap Demo</h1>
            <h3 class="font-weight-thin">A minimal Tiptap editor with a focus on simplicity and extensibility.</h3>
        </div>

        <div class="border rounded-lg editor editor-focus" v-if="editor">
            <tiptap-toolbar :editor="editor" />
            <editor-content :editor="editor" class="pa-3" />
            <div class="border-t pa-3 bg-grey-lighten-5 rounded-b-lg" v-text="editor.getHTML()"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TiptapToolbar from '~/components/TiptapToolbar.vue';
import { Editor, EditorContent } from '@tiptap/vue-3';
import { XmlSchema } from '~/components/tiptap/schema';

const editor = ref<Editor>();

onMounted(() => {
    editor.value = new Editor({
        content: '<p>test</p>',
        extensions: [
            XmlSchema,
        ],
    });
});
onBeforeUnmount(() => {
    if (editor.value) {
        editor.value.destroy();
    }
});
</script>

<style lang="scss">
.editor {
    box-shadow: 0 0 0 1px #00000008, 0 2px 4px #0000000d, 0 12px 24px #0000000d;
}
.editor-focus:has(.ProseMirror-focused) {
    outline: 1px solid blueviolet;
    .ProseMirror-focused {
        outline: none;
    }
}
</style>