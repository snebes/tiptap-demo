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
    const files = event.target.files;
    if (files?.length !== 1) {
        return;
    }

    let dataUri = '';
    const fileArray = Array.from(files);

    for (const file of fileArray) {
        console.log(file);
    }

};
</script>

<template>
    <v-container fluid>
        <v-form @submit.prevent="">
            <v-btn @click="handleClick">
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