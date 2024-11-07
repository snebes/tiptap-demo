<!--
  - (c) International Code Council
  -
  - For the full copyright and license information, please view the LICENSE
  - file that was distributed with this source code.
  -->

<script setup lang="ts">
const props = defineProps({
    editor: Object,
    close: Function,
});

const fileInputRef = ref(null);

const handleClick = () => {
    fileInputRef.value?.click();
}

const handleFile = async (event) => {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
        const dataUri = reader.result;
        props.editor?.chain().focus().setMediaObject({
            images: [{ src: dataUri, alt: '' }],
            caption: '',
        }).run();
    }

    reader.readAsDataURL(file);

    if (props.close) {
        props.close();
    }
};
</script>

<template>
    <v-container fluid>
        <v-form @submit.prevent="">
            <v-btn block variant="tonal" @click="handleClick">
                Upload from your computer
            </v-btn>
            <input
                type="file"
                accept="image/jpeg,image/gif,image/png,image/svg+xml"
                ref="fileInputRef"
                class="d-none"
                @change="handleFile"
            />
        </v-form>
    </v-container>
</template>