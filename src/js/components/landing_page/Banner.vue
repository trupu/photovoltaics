<template lang="pug">
    section#banner
        div.banner-title
            | Kalkulator
        div.banner-subtitle
            | Oblicz koszt montażu paneli słonecznych na podstawie płaconych rachunków za prąd!
        div.banner-buttons
            router-link(to='/kalkulator')
                button.button-medium
                    | Kalkulator
            router-link(to='/kontakt')
                button.button-medium_reverse
                    | Kontakt
</template>
<script>
import Buttons from '../Buttons.vue';

export default {
    name: 'Banner',
    components: {
        Buttons
    }
}
</script>
<style lang="scss">
    #banner {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        background-image: url('../../../img/landingpage/panel.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;


        width: 100%;
        height: 100vh;

        color: #fff;
        text-shadow: 0 0 5px #000;

        text-align: center;
        padding: 0 10px;

        .banner-title {
            font-size: 3em;
            text-transform: uppercase;
            font-weight: 700;

            width: 100%;
        }

        .banner-subtitle {
            width: 100%;

            font-size: 1.5em;
            margin-bottom: 20px;
        }

        .banner-buttons {
            display: flex;
            flex-flow: column;

            width: 100%;
            align-items: center;
            justify-content: center;

            button {
                margin: 10px 0;
            }
        }
    }


    @media (min-width: 768px) {
        #banner {
            background-size: cover;

            .banner-subtitle {
                width: 50%;
            }

            .banner-buttons {
                flex-flow: row;

                button {
                    margin: 0 20px;
                }
            }
        }
    }
</style>