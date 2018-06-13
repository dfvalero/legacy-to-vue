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
                <box v-model="dumb.madness" @input="updateGlobalCounter"></box>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Bus from '../bus';
    import Box from '../components/box.vue';
    import Dumb from '../components/dumb.vue';

    export default {
        components: { Box, Dumb },
        data() {
            return {
                importantPeople: null
            };
        },
        mounted() {
            axios.get('/ajax.php')
                .then(({ data: importantPeople }) => {
                    this.importantPeople = importantPeople;
                });

            Bus.$on('clear.madness', () => {
                if (!this.importantPeople) {
                    return;
                }

                this.importantPeople = this.importantPeople.map((dumb) => {
                    dumb.madness = 0;

                    return dumb;
                });

                Bus.$emit('update.counter', 0);
            });
        },
        methods: {
            updateGlobalCounter() {
                const counter = this.importantPeople
                    .reduce((total, actual) => total + Number(actual.madness), 0);

                Bus.$emit('update.counter', counter);
            }
        }
    };
</script>
