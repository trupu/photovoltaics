<template lang='pug'>
    section#calc
        div.calc-header.animation-onshow_left.animation-hide
            | Podaj miesięczny koszt energii:
            input#value(type='text' v-model='calculator.cost' @input='calcService(calculator.cost)')
            | PLN / miesięcznie
            p.error-handler(v-if='calculator.errorMessage')
                | {{ calculator.errorMessage }}
        div.calc-wrapper.animation-onshow_popup.animation-hide
            div.single-calc
                p.header
                    | Podstawowe dane:
                p.content
                    p.single-content
                        | Roczny koszt energii elektrycznej: 
                        b
                            | {{ calculator.yearlyExpense }}zł
                    p.single-content
                        | kWh miesięcznie:
                        b
                            | {{ calculator.monthlyEnergy }}kWh
                    p.single-content
                        | kWh rocznie:
                        b
                            | {{ calculator.yearlyEnergy }}kWh
                p.result
                    | Potrzebna moc instalacji:
                    b.color-changer
                        | {{ calculator.neededPower }}kWh
            div.single-calc
                p.header
                    | Wyliczenia dla modułów:
                    b
                        | {{ calculator.module1 }}W
                p.content
                    p.single-content
                        | Aby uzyskać zalecaną moc potrzebujesz: <br />
                        b.color-changer
                            | {{ calculator.module1Amount }}szt.
                        | modułów (<b class='color-changer'>{{ calculator.module1Energy }}kW</b>)
                    p.result
                        | Powierzchnia modułów:
                        b.color-changer
                            | {{ calculator.module1Surface }}m<sup>2</sup>
            div.single-calc
                p.header
                    | Wyliczenia dla modułów:
                    b
                        | {{ calculator.module2 }}W
                p.content
                    p.single-content
                        | Aby uzyskać zalecaną moc potrzebujesz: <br />
                        b.color-changer
                            | {{ calculator.module2Amount }}szt.
                        | modułów (<b class='color-changer'>{{ calculator.module2Energy }}kW</b>)
                    p.result
                        | Powierzchnia modułów:
                        b.color-changer
                            | {{ calculator.module2Surface }}m<sup>2</sup>
        div.calc-installation.animation-onshow_popup
            | {{ calculator.installationCost }}
            p.warning
                | Jest to jedynie szacowany koszt instalacji. Cena może się zmienić, zależnie od rodzaju zadaszenia oraz rodzaju dachówki.
        div.calc-header.animation-onshow_left
            | Twoja oszczędność:
            b.color-changer
                | {{ calculator.yearlySafe }}
            | PLN / rocznie
        div.calc-info.animation-onshow_left
            | * - średnia cena prądu z dnia 01.01.2020r (0.55zł/kWh).
        <ContactMini class='changed-contact'/>
        <Animation />
</template>
<script>
import calc from '../mixins/calc';
import ContactMini from '../components/Contact-mini.vue';
import Animation from '../components/Animation.vue';

export default {
    name: 'Calc',
    components: {
        ContactMini,
        Animation
    },
    data() {
        return {
            header: {
                title: 'Kalkulator',
                subtitle: '',
                description: 'Oblicz koszt instalacji PV',
                path: window.location.pathname
            },
            calc,
            calcTimeout: '',
            calculator: {
                errorMessage: '',
                cost: 120,
                // Energy cost based on globenergia.pl data 2020
                energyCost: 0.50,
                energyPower: 0.022,
                neededSurface: 1.7,
                yearlyExpense: '',
                monthlyEnergy: '',
                yearlyEnergy: '',
                neededPower: '',
                module1: 325,
                module1Amount: '',
                module1Energy: 0.325,
                module1Surface: '',
                module2: 340,
                module2Amount: '',
                module2Energy: 0.34,
                module2Surface: '',
                yearlySafe: '',
                installationCost: '',
            }
        }
    },
    methods: {
        componentsColorsChanger(titleColor, subtitleColor, linksColor) {
            const title = document.querySelector('.title-regular');
            const titleWrapper = document.querySelector('.title-wrapper').querySelector('p');
            const regular = document.querySelectorAll('.regular');
            const pathWrapper = document.querySelector('.path-wrapper').querySelector('a');
            pathWrapper.style.color = linksColor;
            regular.forEach(el => el.style.color = subtitleColor);
            titleWrapper.style.color = subtitleColor;
            title.style.color = titleColor;
        },
        // Input Validation
        validateValue(value) {
            return isNaN(value) ? false : true;
        },
        // Calculations and DOM changes
        calculateValues(value) {
            const c = this.calculator;
            c.yearlyExpense = value*12;
            c.monthlyEnergy = Math.round((value/c.energyCost)*100)/100;
            c.yearlyEnergy = Math.round((c.monthlyEnergy*12)*100)/100;
            c.neededPower = Math.round((c.energyPower*value)*100)/100;
            c.module1Amount = Math.ceil(c.neededPower / c.module1Energy);
            c.module2Amount = Math.ceil(c.neededPower / c.module2Energy);
            c.module1Surface = Math.round((c.neededSurface * c.module1Amount*100))/100;
            c.module2Surface = Math.round((c.neededSurface * c.module2Amount*100))/100;
            c.yearlySafe = value*12;
            c.installationCost = this.calc.getCost(c.neededPower, c.module2Energy);
        },
        calcService(cost) {
            const input = document.querySelector('#value');
            if (!this.validateValue(cost)) {
                this.calculator.errorMessage = 'Podaj prawidłowy koszt energii (liczba)';
                input.style.color = '#E84C15';
                return;
            }
            this.calculator.errorMessage = '';
            input.style.color = '#249fa1';
            if (cost > 390) {
                this.calculator.errorMessage = 'Dla tak wysokich rachunków zalecamy wycenę indywidualną';
                input.style.color = '#E8BE3F';
            }
            this.calculateValues(cost);
        }
    },
    mounted() {
        this.$store.commit('changeTitle', [this.header.title, this.header.subtitle, this.header.description, this.header.path]);
        this.calcTimeout = setTimeout(() => {
            this.componentsColorsChanger('#fff', '#249fa1', '#fff');
            this.calculateValues(this.calculator.cost);
        }, 100);
        window.scrollTo(0,0);
    },
    destroyed() {
        clearTimeout(this.calcTimeout);
        this.$store.state.header.renderPath = false;
        this.componentsColorsChanger('#000', '#555', '#000');
    }
}
</script>
<style lang="scss">
    
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    #calc {
        width: 100%;
        height: auto;

        background-color: #005b6b;
        color: #fff;
        padding: 250px 5px 100px 5px;
        position: absolute;
        top: 0;
        left: 0;
    
        .color-changer {
            color: $lightCyan;
            margin: 0 5px;
        }

        .calc-installation {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            text-align: center;

            width: 100%;
            font-size: 1.1em;

            .warning {
                margin: 15px 0 30px 0;
                color: goldenrod;
                font-size: .6em;
            }
        }

        .calc-header {
            width: 100%;
            margin: 30px 0;
            text-align: center;

            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            font-size: 1.2em;
            position: relative;

            .error-handler {
                color :#E8BE3F;
                font-size: .8em;
                width: 100%;
                text-align: center;
                position: absolute;
                bottom: -20px;
            }

            input {
                margin: 20px 0;
                background: none;
                border: none;
                border-bottom: 2px solid $lightCyan;
                width: 150px;
                font-size: 1.8em;
                color: $lightCyan;
                text-align: center;
                font-weight: 700;
            }

            b {
                font-size: 1.2em;
            }
        }

        .calc-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 80px 0;
            margin: 50px 0;
            align-items: center;
            justify-content: center;

            text-align: center;
            font-size: 1.2em;

            .single-calc {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-items: flex-start;
                font-size: .7em;
                height: 100%;

                .single-content {
                    line-height: 1.5;
                }

                .result {
                    margin-top: 20px;
                }

                b {
                    margin: 0 5px;
                }

                .header {
                    font-size: 1.2em;
                    margin-bottom: 20px;
                    text-transform: uppercase;

                    b {
                        color: $lightCyan;
                        font-weight: 700;
                    }
                }
            }
        }

        .changed-contact {
            margin: 150px 0;

            a {
                button {
                    border: 1px solid $lightCyan;
                    background-color: #005b6b;

                    &:hover {
                        background-color: $lightCyan;
                        border-radius: 10px;
                    }
                }
            }
        }

        .calc-info {
            width: 100%;
            font-size: .7em;
            text-align: center;
        }
    }

@media (min-width: 768px) {

    #calc {
        .calc-header {
            flex-flow: row;
        }

        .calc-wrapper {
            margin: 100px 0;
            grid-template-columns: repeat(3, 1fr);
            font-size: .8em;

            .single-content {
                line-height: 2;
            }
        }
    }

}

</style>
