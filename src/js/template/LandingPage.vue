<template lang="pug">
    section#landing
        <Banner />
        <MiniOffer />
        <Projects />
        <Opinions />
        <Footer />
</template>
<script>
import Banner from '../components/landing_page/Banner.vue';
import MiniOffer from '../components/landing_page/MiniOffer.vue';
import Projects from '../components/landing_page/Projects.vue';
import Opinions from '../components/landing_page/Opinions.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'LandingPage',
    components: {
        Banner,
        MiniOffer,
        Projects,
        Opinions,
        Footer
    }
}
</script>
<style lang="scss">
    #landing {
        height: auto;
    }
</style>