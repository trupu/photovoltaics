<template lang="pug">
    div.counter-container
        div.counter-wrapper
            div.single-counter(v-for='key in counterData')
                i(:class='key.icon')
                p.amount
                    | {{ key.amount }}
                p.content
                    | {{ key.content }}
</template>
<script>
export default {
    name: 'Counter',
    data() {
        return {
            counterData: [
                {
                    content: 'Zadowolonych klientów',
                    amount: 437,
                    icon: 'fas fa-users'
                },
                {
                    content: 'Kilowatów mocy dostarczane przez nas',
                    amount: 2500,
                    icon: 'far fa-lightbulb'
                },
                {
                    content: 'Ocalonego świeżego powietrza',
                    amount: 999,
                    icon: 'fas fa-leaf'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    .counter-container {
        width: 100%;
        min-height: 500px;
        padding: 50px 0;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: $darkCyan;

        .counter-wrapper {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: space-around;

            width: 100%;

            .single-counter {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;

                margin: 50px 0;

                width: 80%;
                text-align: center;

                i {
                    font-size: 4em;
                    color: $lightCyan;
                }

                .amount {
                    font-size: 2em;
                    font-weight: 700;
                    margin: 10px 0;
                }

                .content {
                    font-size: 1.5em;
                    font-weight: 300;
                    text-transform: uppercase;
                }

                transition: all .3s ease-in-out;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }

@media (min-width: 768px) {
    .counter-container {
        .counter-wrapper {
            flex-flow: row;

            .single-counter {
                width: 30%;
                margin: 0;
            }
        }
    }
}

</style>
