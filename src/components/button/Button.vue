<script setup lang="ts">

import {computed} from 'vue';
import Icon from '../icon/Icon.vue';
// import {VTooltip} from 'floating-vue'
import Popper from "vue3-popper";

import icons from './config';

const props = withDefaults(defineProps<{
    size?: 'small' | 'medium' | 'big',
    config: {
        icon: keyof typeof icons,
    }
}>(),
    {
        size: 'medium'
    });


const cls = computed(() => props.size);

</script>

<template>
    <Popper content="This is the Popper content 🍿">

        <button :class="[cls]">
            <slot />
            <Icon />
        </button>

    </Popper>

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