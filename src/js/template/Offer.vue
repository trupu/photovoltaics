<template lang="pug">
    section#offer
        <Services/>
        <Benefits/>
        <PVDescription/>
</template>
<script>
import Services from '../components/offer/Services.vue';
import Benefits from '../components/offer/Benefits.vue';
import PVDescription from '../components/offer/PVDescription.vue';

export default {
    name: 'Offer',
    components: {
        Services,
        Benefits,
        PVDescription
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
        this.$parent.changeTitle(this.header.title, this.header.subtitle, this.header.description, this.header.path);
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
</style>