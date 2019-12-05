<template lang="pug">
    section#landing
        <Banner />
        <MiniOffer />
        <Projects />
</template>
<script>
import Banner from '../components/landing_page/Banner.vue';
import MiniOffer from '../components/landing_page/MiniOffer.vue';
import Projects from '../components/landing_page/Projects.vue';

export default {
    name: 'LandingPage',
    components: {
        Banner,
        MiniOffer,
        Projects
    }
}
</script>
<style lang="scss">
    #landing {
        height: auto;
    }
</style>