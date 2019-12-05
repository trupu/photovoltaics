<template lang="pug">
    section#mini-offer
        div.mini-offer_wrapper
            h3.wrapper__title
                | Oferta
            p.wrapper__content
                | Zdajemy sobie sprawę, że Odnawialne Źródła Energii są przyszłością świata. Oferujemy solidne rozwiązania oparte o najnowsze technologie, a to wszystko pod okiem najlepszych specjalistów. Postaw na przyszłość!
        div.mini-offer_icons
            div.icons_single
                i(class='fas fa-solar-panel')
                h4.mini-title
                    | Panele
                    span.color-changer
                        | Fotowoltaiczne
                p.content
                    | Energia słoneczna przetwarzana jest bezpośrednio w energię elektryczną, dzięki czemu nie potrzebujemy generatorów!
            div.icons_single
                i(class='fab fa-pagelines')
                h4.mini-title
                    | Czysta
                    span.color-changer
                        | Planeta
                p.content
                    | Stosując Odnawialne Źródła Energii dbamy o przyszłość swoją i naszych dzieci!
            div.icons_single
                i(class='far fa-lightbulb')
                h4.mini-title
                    | Tania
                    span.color-changer
                        | Energia
                p.content
                    | Instalacja zwraca się bardzo szybko. Później panele generują już tylko zysk!
</template>
<script>
export default {
    name: 'MiniOffer',

}
</script>
<style lang="scss">
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    #mini-offer {
        width: 100%;
        height: auto;
        padding: 50px 10px;

        .mini-offer_wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;

            width: 100%;

            .wrapper__title {
                width: 100%;

                font-size: 1.8em;
                font-weight: 400;

                text-transform: uppercase;
                text-align: center;
                margin: 10px 0;
            }

            .wrapper__content {
                width: 90%;
                margin: 10px 0;

                text-align: center;
            }
        }

        .mini-offer_icons {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;

            margin: 30px 0;

            .icons_single {
                display: flex;
                flex-flow: column;

                align-items: center;
                justify-content: center;

                margin: 20px 0;

                i {
                    font-size: 4em;
                    color: $darkCyan;
                }

                .mini-title {
                    font-size: 1.2em;
                    color: #000;
                    margin: 20px 0;
                    text-transform: uppercase;

                    span {
                        margin: 0 5px;
                    }
                }

                .content {
                    width: 90%;

                    text-align: center;
                }
            }
        }
    }

    @media (min-width: 768px) {
        #mini-offer {
            .mini-offer_wrapper {
                .wrapper__content {
                    width: 70%;
                }
            }

            .mini-offer_icons {
                flex-flow: row;
                align-items: flex-start;
                margin: 80px 0 100px 0;

                .icons_single {

                    max-width: 30%;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        #mini-offer {
            .mini-offer_icons {
                .icons_single {
                    width: 300px;
                }
            }
        }
    }

</style>
