<style lang="scss">
    .boom {
        position: absolute;
        width: 100%;
        height: 100%;
        background: blue;
    }

    .boom__text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        text-align: center;
        animation-name: boom;
        animation-duration: 10000ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
</style>

<template>
    <div class="boom">
        <div class="boom__text">You started a<br>WAR!</div>
    </div>
</template>
