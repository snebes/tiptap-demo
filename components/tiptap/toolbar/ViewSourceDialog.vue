<script setup lang="ts">
import TiptapToolbarButton from '~/components/tiptap/toolbar/TiptapToolbarButton.vue';
import { Editor } from '@tiptap/vue-3';

const props = defineProps({
    editor: {
        type: Editor,
        required: true,
    }
})
</script>

<template>
    <tiptap-toolbar-button
        icon="mdi-file-xml-box"
        tooltip="View Source"
    >
        View Source
        <template v-slot:dialog>
            <v-dialog
                :fullscreen="true"
            >
                <v-card>
                    <v-card-actions>
                        <v-spacer />

                        <v-btn variant="plain" @click.prevent="dialog = false"> Cancel </v-btn>
                        <v-btn variant="elevated" class="bg-primary" @click.prevent="save">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
    </tiptap-toolbar-button>
</template>
