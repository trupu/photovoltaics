<template lang="pug">
    section#landing
        <Banner />
</template>
<script>
import Banner from '../components/landing_page/Banner.vue';

export default {
    name: 'LandingPage',
    components: {
        Banner
    }
}
</script>
<style lang="scss">
    #landing {
        height: auto;
    }
</style>