<!--
  - (c) International Code Council
  -
  - For the full copyright and license information, please view the LICENSE
  - file that was distributed with this source code.
  -->

<script setup lang="ts">
const props = defineProps({
    click: {
        type: Function,
        default: () => {
        },
    },
    active: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: '',
    },
    tooltip: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <v-btn
        @click="click"
        :active="active"
        variant="text"
        rounded="0"
        class="toolbar-btn"
    >
        <v-tooltip v-if="tooltip.length > 0" activator="parent" location="top">{{ props.tooltip }}</v-tooltip>
        <v-icon v-if="icon.length > 0" size="large">{{ props.icon }}</v-icon>
        <slot name="default" />
        <slot name="dialog" />
    </v-btn>
</template>

<style lang="scss">
.toolbar-btn {
    height: 1.75rem !important;
    min-width: 1.75rem !important;
    padding: 0 !important;
    text-transform: none;
    font-weight: normal;
    font-kerning: auto;
}
.toolbar-dropdown-btn {
    height: 1.75rem !important;
    min-width: 1rem !important;
    padding: 0 !important;
    text-transform: none;
    font-weight: normal;
    font-kerning: auto;
}
</style>
