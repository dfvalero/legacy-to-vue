<template>
    <img :src="require(`../../images/${dumb.id}.png`)"
         :class="getShakeClass(dumb.madness)">
</template>

<script>
    export default {
        props: ['dumb'],
        methods: {
            getShakeClass(madness) {
                if (madness === 0) {
                    return '';
                }

                return `shake-${madness}`;
            }
        }
    };
</script>
