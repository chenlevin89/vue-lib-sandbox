import {default as Button} from './Button.vue';
import {default as ButtonIcon} from './ButtonIcon.vue';

// required to enforce index.js as build and maintain types
const Types = () => [Button, ButtonIcon];

export {Button, ButtonIcon, Types};