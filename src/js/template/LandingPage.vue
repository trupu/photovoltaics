<template lang="pug">
    section#landing
        <Banner />
        <MiniOffer />
        <Projects />
        <Opinions />
</template>
<script>
import Banner from '../components/landing_page/Banner.vue';
import MiniOffer from '../components/landing_page/MiniOffer.vue';
import Projects from '../components/landing_page/Projects.vue';
import Opinions from '../components/landing_page/Opinions.vue';

export default {
    name: 'LandingPage',
    components: {
        Banner,
        MiniOffer,
        Projects,
        Opinions
    },
    mounted() {
        window.scrollTo(0,0);
    }
}
</script>
<style lang="scss">
    #landing {
        height: auto;
    }
</style>