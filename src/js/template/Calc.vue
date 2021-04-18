<template lang="pug">
    section#calc
        div.calc-header.animation-onshow_left.animation-hide
            | Podaj miesięczny koszt energii:
            input#value(type='text' v-model='calculator.cost' @input="calculateValues(calculator.cost)")
            | PLN / miesięcznie
            p.error-handler(v-if='getErrorMessage')
                | {{ getErrorMessage }}
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
                        | {{ calculator.neededPower }}kWp
            div.single-calc(v-for="(mod, index) in calculator.modules" :key="index")
                p.header
                    | Wyliczenia dla modułów:
                    b
                        | {{ mod.power }}W
                p.content
                    p.single-content
                        | Aby uzyskać zalecaną moc potrzebujesz: <br />
                        b.color-changer
                            | {{ mod.amount }}szt.
                        | modułów (<b class='color-changer'>{{ mod.producedEnergy }}kWp</b>)
                    p.result
                        | Powierzchnia modułów:
                        b.color-changer
                            | {{ mod.surface }}m<sup>2</sup>
        div.calc-installation.animation-onshow_popup
            | Koszt instalacji nie przekroczy: {{ calculator.installationCost }}zł
            p.warning
                | Jest to jedynie szacowany koszt instalacji. Cena może się zmienić, zależnie od rodzaju zadaszenia oraz rodzaju dachówki.
        div.calc-header.animation-onshow_left
            | Twoja oszczędność:
            b.color-changer
                | {{ calculator.yearlySafe }}
            | PLN / rocznie
        div.calc-info.animation-onshow_left
            | * - średnia cena prądu z dnia 01.02.2021r (0.55zł/kWh).
        <ContactMini class='changed-contact'/>
        <Animation />
</template>
<script>
import { getCost } from "../mixins/calc";
import ContactMini from "../components/Contact-mini.vue";
import Animation from "../components/Animation.vue";

export default {
  name: "Calc",
  components: {
    ContactMini,
    Animation,
  },
  data() {
    return {
      header: {
        title: "Kalkulator",
        subtitle: "",
        description: "Oblicz koszt instalacji PV",
        path: window.location.pathname,
      },
      calcTimeout: "",
      calculator: {
        cost: 120,
        // Energy cost based on http://www.cena-pradu.pl/mapa.html data 2021
        energyCost: 0.59,
        // br*wa.pl/panele-kalkulator-fotowoltaiczny.html - wielkość instalacji / miesięczny koszt
        energyPower: 0.0216,
        neededSurface: 1.7,
        yearlyExpense: "",
        monthlyEnergy: "",
        yearlyEnergy: "",
        neededPower: "",

        modules: [
          {
            power: 370,
            amount: "",
            energy: 0.37,
            producedEnergy: "",
            surface: "",
          },
          {
            power: 430,
            amount: "",
            energy: 0.43,
            producedEnergy: "",
            surface: "",
          },
        ],
        yearlySafe: "",
        installationCost: "",
      },
    };
  },
  computed: {
    getErrorMessage() {
      return this.calculator.cost > 400
        ? "Dla tak wysokich kosztów zalecamy wycenę indywidualną."
        : "";
    },
  },
  methods: {
    // Input Validation
    validateValue(value) {
      return isNaN(value) ? false : true;
    },
    // Calculations and DOM changes
    calculateValues(value) {
      const c = this.calculator;
      c.yearlyExpense = value * 12;
      c.monthlyEnergy = (value / c.energyCost).toFixed(0);
      c.yearlyEnergy = (c.monthlyEnergy * 12).toFixed(0);
      c.neededPower = (c.energyPower * value).toFixed(2);

      c.modules.forEach((mod) => {
        mod.amount = Math.ceil(c.neededPower / mod.energy);
        mod.producedEnergy = (mod.amount * mod.energy).toFixed(2);
        mod.surface = (c.neededSurface * mod.amount).toFixed(2);
      });

      c.yearlySafe = value * 12;

      getCost(c.neededPower);
      c.installationCost = getCost(c.neededPower);
    },
  },
  mounted() {
    this.$store.commit("changeTitle", [
      this.header.title,
      this.header.subtitle,
      this.header.description,
      this.header.path,
    ]);
    this.calcTimeout = setTimeout(() => {
      this.calculateValues(this.calculator.cost);
      document.querySelector("#title").classList.add("on-calculator-page");
    }, 100);
    window.scrollTo(0, 0);
  },
  destroyed() {
    document.querySelector("#title").classList.remove("on-calculator-page");
    clearTimeout(this.calcTimeout);
    this.$store.state.header.renderPath = false;
  },
};
</script>
<style lang="scss">
#calc {
  width: 100%;
  height: auto;

  background-color: $color-primary-dark;
  color: #fff;
  padding: 250px 5px 100px 5px;
  position: absolute;
  top: 0;
  left: 0;

  .color-changer {
    color: $color-secondary-light;
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
      font-size: 0.6em;
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
      color: #e8be3f;
      font-size: 0.8em;
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: -20px;
      left: 0;
    }

    input {
      margin: 20px 0;
      background: none;
      border: none;
      border-bottom: 2px solid $color-secondary-light;
      width: 150px;
      font-size: 1.8em;
      color: $color-secondary-light;
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
      font-size: 0.7em;
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
          color: $color-secondary-light;
          font-weight: 700;
        }
      }
    }
  }

  .changed-contact {
    margin: 150px 0;

    a {
      button {
        border: 1px solid $color-secondary-light;
        background-color: $color-secondary;

        &:hover {
          background-color: $color-secondary-light;
          border-radius: 10px;
        }
      }
    }
  }

  .calc-info {
    width: 100%;
    font-size: 0.7em;
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
      font-size: 0.8em;

      .single-content {
        line-height: 2;
      }
    }

    .single-calc {
      font-size: 1em !important;
    }
  }
}
</style>
