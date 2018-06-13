<style lang="scss">
    .box {
        display: flex;
        border: 0.0625rem solid black;
    }

    .box__total {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        border-right: 0.0625rem solid black;
        border-left: 0.0625rem solid black;
        font-size: 1.25rem;
    }

    .box__selector {
        padding: 0.625rem;
        cursor: pointer;
        user-select: none;
    }
</style>

<template>
    <div class="box">
        <div class="box__selector" @click="onClickLess">-</div>
        <div class="box__total">{{value}}</div>
        <div class="box__selector" @click="onclickMore">+</div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
                max: 10
            };
        },
        methods: {
            onClickLess() {
                const total = this.value - 1;

                if (total < 0) {
                    return;
                }

                this.$emit('input', total);
            },

            onclickMore() {
                const total = this.value + 1;

                if (total > this.max) {
                    return;
                }

                this.$emit('input', total);
            }
        }
    };
</script>
