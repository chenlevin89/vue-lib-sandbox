<script setup lang="ts">

import {computed} from 'vue';
import Icon from '../icon/Icon.vue';
import {VTooltip} from 'floating-vue'

const props = withDefaults(defineProps<{
    size?: 'small' | 'medium' | 'big'
}>(),
    {
        size: 'medium'
    });


const cls = computed(() => props.size);

</script>

<template>

    <VTooltip>
        <button :class="[cls]">
            <slot />
            <Icon />
        </button>

        <template #popper>
            Help me fund my Open Source work!
        </template>

    </VTooltip>


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