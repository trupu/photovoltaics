<template lang="pug">
    div.team-container
        h4.team-title
            | Zespół
        div.team-wrapper(v-for='key in teamArray' :class='key.reverse')
            div.team-content
                h4.name
                    | {{ key.name }}
                p.position
                    | {{ key.position }}
                p.desc
                    | {{ key.desc }}
            div.team-image
                img(:src='key.img')
</template>
<script>
export default {
    name: 'Team',
    data() {
        return {
            teamArray: [
                {
                    name: 'Grzegorz Chabior',
                    position: 'Właściciel',
                    desc: 'Specjalista, monter, doradca, założyciel firmy. Nadzoruje instalacje PV od początku do końca i czuwa, aby realizacja przebiegła bezproblemowo. Jego kilkunastoletnie doświadczenie w branży przejawia się podczas kontaktu z klientem. Potrafi dobrać idealne rozwiązanie, niezależnie od warunków',
                    reverse: '',
                    img: './img/about/pracownik1.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    .team-container {
        margin: 100px 0 50px 0;
        width: 100%;
        padding: 0 10px;

        .team-title {
            font-size: 2em;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
        }

        .team-wrapper {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 30px 0;

            .team-content {
                display: flex;
                flex-flow: column;
                text-align: left;

                .name {
                    font-size: 1.2em;
                }

                .position {
                    color: $lightCyan;
                    font-size: .9em;
                }

                .desc {
                    margin: 10px 0;
                    text-align: center;
                }
            }

            .team-image {
                width: 100%;

                img {
                    object-fit: cover;
                    width: 100%;
                    height: 200px;
                }
            }
        }
    }

@media (min-width: 768px) {
    .team-container {
        width: 80%;
        .team-wrapper {
            flex-flow: row;

            .team-content {
                text-align: left;

                .desc {
                    text-align: left;
                }
            }

            .team-image {
                margin: 0 20px;
                width: 100%;
                img {
                    width: 100%;
                    height: 200px;
                }
            }
        }

        .team-reverse {
            flex-flow: row-reverse;
        }
    }
}

</style>
