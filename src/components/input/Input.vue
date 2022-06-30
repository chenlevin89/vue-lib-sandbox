<script setup lang="ts">

import {computed} from 'vue';
import Icon from '../icon/Icon.vue';

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
    <Icon />

</template>

<style scoped>

input {
    width: 200px;
    border:1px solid red;
}

</style>