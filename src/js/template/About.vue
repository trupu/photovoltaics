<template lang="pug">
    section#about
        <Main />
        <Counter />
        <Team />
        <ContactMini />
        <Projects />
</template>
<script>
import ContactMini from '../components/Contact-mini.vue';
import Main from '../components/about/Main.vue';
import Team from '../components/about/Team.vue';
import Counter from '../components/about/Counter.vue';
import Projects from '../components/about/Projects.vue';

export default {
    name: 'About',
    components: {
        ContactMini,
        Main,
        Team,
        Counter,
        Projects
    },
    data() {
        return {
            header: {
                title: 'O Firmie',
                subtitle: '',
                description: 'Kim jesteśmy?',
                path: window.location.pathname
            }
        }
    },
    mounted() {
        this.$parent.changeTitle(this.header.title, this.header.subtitle, this.header.description, this.header.path);
    },
    destroyed() {
        this.$parent.header.renderPath = false;
    }
}
</script>
<style lang="scss">
    
    #about {
        width: 100vw;

        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        overflow-x: hidden;
    }

</style>
