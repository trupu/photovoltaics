<template lang="pug">
    section#services
        div.services-wrapper
            div.services-img
                img(src='../../../img/landingpage/ppanel.png')
            div.services-content
                h3.title
                    | Czym się zajmujemy?
                p.content
                    | Zajmujemy się profesjonalnym montażem paneli fotowoltaicznych na terenie gospodarstwa domowego. Panele PV pokryte są szkłem hartowanym, gwarantującym wysoką odporność na uszkodzenia spowodowane warunkami atmosferycznymi. <br/><br/> W naszej ofercie znajduje się instalacja PV zarówno na dachu, jak i na gruncie.
</template>
<script>
export default {
    name: 'Services'
}
</script>
<style lang="scss">
    #services {
        .services-wrapper {
            display: flex;
            flex-flow: column-reverse;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: auto;

            .services-img {
                margin: 20px 0;
                width: 100%;
                height: 300px;

                img {
                    object-fit: cover;
                    height: 300px;
                    width: 100%;
                }
            }

            .services-content {

                width: 100%;
                padding: 0 5px;

                .title {
                    font-size: 1.2em;
                    font-weight: 400;
                    margin: 0 0 20px 0;
                }

                .content {
                    font-size: 1em;
                }
            }
        }
    }

    @media (min-width: 768px) {

        #services {
            .services-wrapper {
                flex-flow: row;
                justify-items: flex-start;

                .services-content {
                    height: 100%;
                }

                .services-img {
                    margin: 0 20px;
                }
            }
        }

    }
</style>
