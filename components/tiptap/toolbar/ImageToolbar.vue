<!--
  - (c) International Code Council
  -
  - For the full copyright and license information, please view the LICENSE
  - file that was distributed with this source code.
  -->

<script setup lang="ts">
import { Editor } from '@tiptap/vue-3';
import ImageEditForm from '~/components/tiptap/schema/figure-elements/ImageEditForm.vue';

const props = defineProps({
    editor: {
        type: Editor,
        required: true,
    },
});

const open = ref(false);
</script>

<template>
    <tiptap-toolbar-button icon="mdi-image">
        <v-dialog v-model="open" activator="parent">
            <v-card>
                <v-card-title class="d-flex justify-space-between align-center">
                    <span>Select Image</span>
                    <v-btn @click="open = false" icon="mdi-close" variant="text" rounded="1" />
                </v-card-title>

                <v-divider class="mb-3" />

                <image-edit-form :editor="editor" @close="open = false" />
            </v-card>
        </v-dialog>
    </tiptap-toolbar-button>
</template>
