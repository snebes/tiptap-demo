<template>
    <div class="border-b px-2 py-1 toolbar">
        <v-btn
            @click="editor.chain().focus().toggleBold().run()"
            :active="editor.isActive('bold')"
            variant="text" rounded="0" class="toolbar-btn">
            <v-tooltip text="Bold" activator="parent" location="top" />
            <v-icon v-bind="props" size="large">mdi-format-bold</v-icon>
        </v-btn>
        <v-btn
            variant="text" rounded="0" class="toolbar-btn">
            <v-icon size="large">mdi-format-italic</v-icon>
        </v-btn>
        <div class="toolbar-divider"/>
        <v-btn
            variant="text" rounded="0" class="toolbar-btn">
            <v-icon size="large">mdi-image</v-icon>

            <v-dialog activator="parent" v-slot:default="{ isActive }">
                <v-card>
                    <v-card-title class="d-flex justify-space-between align-center">
                        <span>Select Image</span>
                        <v-btn @click="isActive.value = false" icon="mdi-close" variant="text" rounded="1"/>
                    </v-card-title>

                    <v-divider class="mb-3"></v-divider>

                    <image-edit-form
                        :editor="editor"
                        :close="() => isActive.value = false"
                    />
                </v-card>
            </v-dialog>
        </v-btn>
    </div>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3';
import ImageEditForm from '~/components/tiptap/schema/figure-elements/ImageEditForm.vue';

const props = defineProps({
    editor: {
        default: null,
        type: Object as PropType<Editor>,
    }
})
</script>

<style lang="scss">
.toolbar-btn {
    height: 1.75rem !important;
    min-width: 1.75rem !important;
    padding: 0 !important;
}
.toolbar-divider {
    display: inline-flex;
    align-items: center;
    justify-items: center;
    border-left: 1px solid rgba(0,0,0,.1);
    height: 1.2rem;
    width: 1px;
    margin: 0 0.3rem;
}
</style>