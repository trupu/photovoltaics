<template lang="pug">
    section#main
        <Navbar />
        <router-view></router-view>

</template>
<script>
import Navbar from './js/components/Navbar.vue';

export default {
    name: 'App',
    components: {
        Navbar
    }
}
</script>
<style lang="scss">
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    .main {
        width: 100%;
        height: 100vh;
        background-color: orangered;
    }

    .color-changer {
        color: $darkCyan;
        font-size: 1.1em;
    }

</style>
