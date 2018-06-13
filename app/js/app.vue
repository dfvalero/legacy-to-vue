<template>
    <div class="page" v-if="!hasWarStarted">
        <corner></corner>
        <home-page></home-page>
    </div>
    <boom v-else></boom>
</template>

<script>
    import { mapGetters } from 'vuex';
    import HomePage from './pages/home.vue';
    import Boom from './components/boom.vue';
    import Corner from './components/corner.vue';

    export default {
        components: { HomePage, Boom, Corner },
        computed: {
            ...mapGetters([
                'hasWarStarted'
            ])
        }
    };
</script>
