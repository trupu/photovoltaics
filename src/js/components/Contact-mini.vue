<template lang="pug">
    section#contact-mini
        p.contact-content
            | Skontaktuj się z nami, aby uzyskać więcej informacji
        router-link(to='/kontakt')
            button.button-medium
                | Kontakt
</template>
<script>
export default {
    name: 'Contact-mini'
}
</script>
<style lang="scss">

    #contact-mini {
        width: 100%;
        height: auto;
        
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        margin: 50px 0;

        .contact-content {
            font-size: 1.2em;
            font-style: italic;
            font-weight: 700;

            margin-bottom: 30px;
            text-align: center;
        }
    }

</style>
