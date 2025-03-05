<!--
  - (c) International Code Council
  -
  - For the full copyright and license information, please view the LICENSE
  - file that was distributed with this source code.
  -->

<script setup lang="ts">
import {Editor, EditorContent} from '@tiptap/vue-3';
import {XmlSchema} from '~/components/tiptap/schema';
import {shallowRef, type ShallowRef} from 'vue';

interface EditorProps {
    modelValue?: string
}

interface EditorEmits {
    (e: 'update:modelValue', value: string): void
    (e: 'editor:ready', editor: Editor): void
    (e: 'editor:focus', editor: Editor): void
    (e: 'editor:blur', editor: Editor): void
}

const props = withDefaults(defineProps<EditorProps>(), {
    modelValue: '',
})

const emit = defineEmits<EditorEmits>()

const editor: ShallowRef<Editor | undefined> = shallowRef();

onMounted(() => {
    editor.value = new Editor({
        content: props.modelValue,
        extensions: [XmlSchema],
        onCreate: ({ editor }) => {
            emit('update:modelValue', editor.getHTML())
            emit('editor:ready', editor)
        },
        onUpdate: ({ editor }) => emit('update:modelValue', editor.getHTML()),
        onFocus: ({ editor }) => emit('editor:focus', editor),
        onBlur: ({ editor }) => emit('editor:blur', editor),
    });
});

onBeforeUnmount(() => {
    editor.value?.destroy()
})

// Update editor with content change from outside module.
watch(
    () => props.modelValue,
    (newValue) => {
        const currentContent = editor.value?.getHTML()
        if (editor.value && currentContent !== newValue) {
            editor.value.commands.setContent(newValue ?? '', false)
        }
    }
)
</script>

<template>
    <div v-if="editor">
        <editor-content :editor="editor" class="xml2-css"></editor-content>
    </div>
</template>
