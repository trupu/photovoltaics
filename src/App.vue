<template lang="pug">
    section#main
        <router-view></router-view>

</template>
<script>
export default {
    name: 'App',
}
</script>
<style lang="scss">
    .main {
        width: 100%;
        height: 100vh;
        background-color: orangered;
    }
</style>