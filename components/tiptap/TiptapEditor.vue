<!--
  - (c) International Code Council
  -
  - For the full copyright and license information, please view the LICENSE
  - file that was distributed with this source code.
  -->

<script setup lang="ts">
import { Editor, EditorContent } from '@tiptap/vue-3';
import { XmlSchema } from '~/components/tiptap/schema';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
});

const editor = ref<Editor>();
const modelValue = defineModel();
const emits = defineEmits([
    'editor:instance',
    'editor:focus',
    'update:modelValue',
]);

onMounted(() => {
    editor.value = new Editor({
        content: modelValue.value as string,
        extensions: [
            XmlSchema,
        ],
        onCreate: () => {
            emits('editor:instance', editor.value);
            emits('update:modelValue', editor.value?.getHTML());
        },
        onUpdate: () => {
            if (editor.value) {
                emits('update:modelValue', editor.value.getHTML());
            }
        },
        onFocus: () => {
            if (editor.value) {
                emits('editor:focus', editor.value);
            }
        },
    });
});

onBeforeUnmount(() => {
    if (editor.value) {
        editor.value.destroy();
    }
});

// Update editor with content change from outside module.
watch(
    () => props.modelValue,
    (newValue) => {
        const isSame = editor.value?.getHTML() === newValue;
        if (!isSame) {
            editor.value?.commands.setContent(newValue, false);
        }
    }
)
</script>

<template>
    <div v-if="editor">
        <editor-content :editor="editor" class="xml2-css"></editor-content>
    </div>
</template>
