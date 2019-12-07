<template lang="pug">
    section#footer
        div.footer-wrapper
            div.single-link(v-for='key in links')
                a(:href='key.url' v-if='key.target' target='blank')
                    i(:class='key.icon')
                    span.name
                        | {{ key.name }}
                router-link(:to='key.url' v-if='!key.target')
                    i(:class='key.icon')
                    span.name
                        | {{ key.name }}
        div.author
            p.content
                | Zaprojektowano i wykonano |
            a(href='https://strubilowicz.netlify.com' target='blank')
                | Sławomir Trubiłowicz
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            links: [
                {
                    icon: 'fab fa-facebook-f',
                    name: 'Facebook',
                    url: 'https://facebook.com',
                    target: true
                },
                {
                    icon: 'far fa-envelope',
                    name: 'adres@email.com',
                    url: '/kontakt',
                    target: false
                },
                {
                    icon: 'fas fa-phone',
                    name: '997 997 997',
                    url: '/kontakt',
                    target: false
                }
            ]
        }
    }
}
</script>
<style lang="scss">

    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    #footer {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 300px;
        padding: 10px 5px;

        background-color: $darkCyan;

        .footer-wrapper {
            display: flex;
            flex-flow: row;
            justify-content: space-around;
            align-items: center;

            width: 100%;

            .single-link {

                a {
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    align-items: center;

                    text-decoration: none;
                    color: darken($darkCyan, 10%);
                    
                    margin: 0 15px;
                    
                    transition: all .3s ease-in-out;

                    i {
                        font-size: 2em;
                    }
                    .name {
                        margin: 5px 0;
                        font-size: .8em;
                    }

                    &:hover {
                        color: lighten($lightCyan, 10%);
                        cursor: pointer;

                        transform: scale(1.2);
                    }
                }
            }
        }

        .author {
            font-size: .8em;
            color: darken($darkCyan, 10%);
            
            display: flex;
            align-items: center;
            justify-content: center;

            margin-top: 20px;

            a {
                font-size: 1.1em;
                color: $lightCyan;
                text-decoration: none;
                margin: 0 5px;
            }
        }
    }

    @media (min-width: 768px) {
        #footer {

            .footer-wrapper {
                .single-link {
                    font-size: 1.5em;
                }
            }

            .author {
                font-size: 1em;
                margin-top: 50px;
            }
        }
    }

</style>
