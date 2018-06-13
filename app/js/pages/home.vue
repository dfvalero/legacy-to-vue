<template>
    <div>
        <div class="wrapper">
            <div class="item" v-for="(dumb, index) in importantPeople" :key="index">
                <dumb :dumb="dumb"></dumb>
            </div>
        </div>
        <h2 class="center">Send Bad news!</h2>
        <div class="wrapper">
            <div class="item" v-for="(dumb, index) in importantPeople" :key="index">
                <h4 class="spaced">{{dumb.id | capitalize}}</h4>
                <box v-model="dumb.madness"></box>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import Box from '../components/box.vue';
    import Dumb from '../components/dumb.vue';

    export default {
        components: { Box, Dumb },
        mounted() {
            this.$store.dispatch('fetchImportantPeople');
        },
        computed: {
            ...mapGetters([
                'importantPeople'
            ])
        }
    };
</script>
