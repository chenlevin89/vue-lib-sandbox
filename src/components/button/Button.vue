<script setup lang="ts">

import {computed} from 'vue';
import Icon from '../icon/Icon.vue';

const props = withDefaults(defineProps<{
    size?: 'small' | 'medium' | 'big'
}>(),
    {
        size: 'medium'
    });


const cls = computed(() => props.size);

</script>

<template>

    <button :class="[cls]">
        <slot />
        <Icon />
    </button>

</template>

<style scoped>
.small {
    width: 25px;
    height: 25px;
}

.medium {
    width: 40px;
    height: 40px;
}

.large {
    width: 50px;
    height: 50px;
}
</style>