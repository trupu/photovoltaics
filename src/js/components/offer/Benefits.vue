<template lang="pug">
    section#benefits
        h3.benefits-title
            | Korzyści płynące z
            span.color-changer
                | Fotowoltaiki
        div.benefits-wrapper
            div.single_benefit(v-for='key in benefits')
                div.benefit_icon
                    i(:class='key.icon')
                div.benefit_content
                    h3.title
                        | {{ key.name }}
                        span.color-changer
                            | {{ key.subname }}
                    p.content
                        | {{ key.content }}
</template>
<script>
import benefits from '../../mixins/benefits';

export default {
    name: 'Benefits',
    data() {
        return {
            benefits
        }
    }
}
</script>
<style lang="scss">

    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    #benefits {
        width: 100%;
        height: auto;

        .benefits-title {
            width: 100%;
            text-align: center;
            font-size: 1.5em;

            margin: 50px 0;

            .color-changer {
                margin: 0 5px;
                font-size: 1.2em;
            }
        }

        .benefits-wrapper {

            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            justify-content: center;
            justify-items: center;
            
            width: 100%;

            .single_benefit {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;

                width: 100%;

                .benefit_icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    
                    i {
                        font-size: 3em;
                        color: $lightCyan; 
                    }
                }

                .benefit_content {
                    width: 100%;
                    margin: 20px 0;
                    .title {
                        width: 100%;
                        text-align: center;
                        font-size: 1.2em;
                        margin-bottom: 10px;

                        .color-changer {
                            font-size: 1.2em;
                            margin: 0 5px;
                        }
                    }

                    .content {
                        text-align: center;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {

        #benefits {

            .benefits-wrapper {
                grid-template-columns: 1fr 1fr;
                grid-gap: 30px 0;

                .single_benefit {
                    flex-flow: column;
                    justify-content: flex-start;

                    width: 80%;
                    height: 100%;
                }
            }

        }

    }

</style>
