<template lang="pug">
    section#offer
        <Services/>
        <Benefits/>
        <PVDescription/>
        <ContactMini />
</template>
<script>
import Services from '../components/offer/Services.vue';
import Benefits from '../components/offer/Benefits.vue';
import PVDescription from '../components/offer/PVDescription.vue';
import ContactMini from '../components/Contact-mini.vue';

export default {
    name: 'Offer',
    components: {
        Services,
        Benefits,
        PVDescription,
        ContactMini
    },
    data() {
        return {
            header: {
                title: 'nasza',
                subtitle: 'oferta',
                description: 'Oferta naszej firmy',
                path: window.location.pathname
            }
        }
    },
    mounted() {
        this.$store.commit('changeTitle', [this.header.title, this.header.subtitle, this.header.description, this.header.path]);
        window.scrollTo(0,0);
    },
    destroyed() {
        this.$store.state.header.renderPath = false;
    }
}
</script>
<style lang="scss">
    #offer {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        padding: 100px 5px 30px 5px;
    }

    @media (min-width: 768px) {
        #offer {
            width: 80%;
        }
    }

</style>
