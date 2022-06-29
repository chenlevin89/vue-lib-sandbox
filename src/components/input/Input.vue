<script setup lang="ts">

import {computed} from 'vue';

const props = withDefaults(defineProps<{
    type?: 'text' | 'number' | 'search'
}>(),
    {
        type: 'text'
    });


const type = computed(() => props.type);

</script>

<template>

    <input :type="type" />

</template>

<style scoped>

input {
    width: 200px;
    border:1px solid red;
}

</style>