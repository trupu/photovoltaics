<template lang="pug">
    section#contact
        <contactData />
        <contactForm />
</template>
<script>
import contactData from '../components/contact/contactData.vue';
import contactForm from '../components/contact/contactForm.vue';

export default {
    name: 'Contact',
    components: {
        contactData,
        contactForm
    },
    data() {
        return {
            header: {
                title: 'Kontakt',
                subtitle: '',
                description: 'Jak można się z nami skontaktować?',
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
    
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    #contact {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        width: 80%;
        margin: 0 0 100px 0;
    }

@media (min-width: 768px) {
    #contact {
        flex-flow: row;
        align-items: flex-start;

        margin: 50px 0 100px 0;
    }
}

</style>
