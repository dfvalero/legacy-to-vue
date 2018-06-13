<style lang="scss">
    .corner {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 1.25rem;
        height: 1.25rem;
        cursor: pointer;
    }

    .corner svg {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>

<template>
    <div class="corner" @click="onClick">
        <loop-icon></loop-icon>
    </div>
</template>

<script>
    import Bus from '../bus';
    import LoopIcon from '../../svg/loop.svg';

    export default {
        components: { LoopIcon },
        methods: {
            onClick() {
                Bus.$emit('clear.madness');
            }
        }
    };
</script>
