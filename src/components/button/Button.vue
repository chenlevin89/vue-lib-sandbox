<script setup lang="ts">

import {computed} from 'vue';
import Icon from '../icon/Icon.vue';
// import {VTooltip} from 'floating-vue'
import Popper from "vue3-popper";

import icons from './config';

const props = withDefaults(defineProps<{
    size?: 'small' | 'medium' | 'large',
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
    <Popper content="This is the Popper content 🍿 ::]">

        <button :class="[cls]">
            <slot />
            <Icon />
        </button>

    </Popper>

</template>

<style scoped>

*{
    --popper-theme-background-color:#9c9393;
}

button {
    border: 1px solid #9c9393;
    border-radius: 4px;
    background: aliceblue;
    text-align: center;
}

.small {
    padding: 5px 5px;
}

.medium {
    padding: 5px 15px;
}

.large {
    padding: 10px 20px;
}
</style>