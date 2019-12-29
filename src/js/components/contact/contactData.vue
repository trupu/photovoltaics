<template lang="pug">
    div.contact-data
        h4.contact-data_header
            | Dane kontaktowe
        div.contact-data_content
            a.content__data(v-for='key in contactData' v-if='key.link != "#"'  :href='key.link' target='_blank')
                i(:class='key.icon')
                p
                    | {{ key.name }}
            a.content__data(v-for='key in contactData' v-if='key.link == "#"'  :href='key.link')
                i(:class='key.icon')
                p
                    | {{ key.name }}
</template>
<script>
export default {
    name: 'contactData',
    data() {
        return {
            contactData: [
                {
                    name: 'Facebook',
                    icon: 'fab fa-facebook-f',
                    link: 'https://facebook.com'
                },
                {
                    name: 'adres@email.com',
                    icon: 'far fa-envelope',
                    link: '#'
                },
                {
                    name: '997 997 997',
                    icon: 'fas fa-phone',
                    link: '#'
                },
                {
                    name: 'Wrocławska 112,\n 65-218 Zielona Góra',
                    icon: 'fas fa-map-marker-alt',
                    link: '#'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    .contact-data {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-flow: column;

        text-align: left;

        width: 100%;
        margin: 50px 0;

        .contact-data_header {
            font-size: 1.5em;
            font-weight: 400;
            margin: 0;
            margin-bottom: 20px;

            width: 100%;
            text-align: left;
        }

        .contact-data_content {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;

            width: 100%;

            .content__data {
                display: flex;
                flex-flow: row;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                margin-bottom: 10px;

                text-decoration: none;
                color: #000;

                i {
                    width: 30px;
                    font-size: 1.2em;
                    color: $darkCyan;
                    margin-right: 10px;
                }
            }
        }
    }

@media (min-width: 768px) {
    .contact-data {
        margin: 0;
    }
}

</style>
