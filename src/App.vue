<template lang="pug">
    section#main
        <Navbar />
        <Title />
        <router-view></router-view>
        <Footer />
</template>
<script>
import Navbar from './js/components/Navbar.vue';
import Footer from './js/components/Footer.vue';
import Title from './js/components/Title.vue';

export default {
    name: 'App',
    components: {
        Navbar,
        Footer,
        Title
    },
    data() {
        return {
            header: {
                renderPath: false,
                title: '',
                subtitle: '',
                description: '',
                path: ''
            }
        }
    },
    methods: {
        changeTitle(title, subtitle, description, path) {
            this.header.renderPath = true;
            this.header.title = title;
            this.header.subtitle = subtitle;
            this.header.description = description;
            this.header.path = path.split('/')[1];
        }
    }
}
</script>
<style lang="scss">
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    #main {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        justify-items: center;

        width: 100%;
        height: auto;

        position: relative;
    }

    .color-changer {
        color: $darkCyan;
        font-size: 1.1em;
    }

</style>
