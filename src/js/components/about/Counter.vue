<template lang="pug">
    div.counter-container
        div.counter-wrapper
            div.single-counter(v-for='key in counterData')
                i(:class='key.icon')
                p.amount
                    | :)
                p.content
                    | {{ key.content }}
</template>
<script>
export default {
  name: "Counter",
  data() {
    return {
      counterData: [
        {
          content: "Zadowolonych klientów",
          amount: 437,
          unit: "",
          icon: "fas fa-users",
        },
        {
          content: "Kilowatów mocy dostarczane przez nas",
          amount: 2500,
          unit: "",
          icon: "far fa-lightbulb",
        },
        {
          content: "Ocalonego świeżego powietrza",
          amount: 100,
          unit: "%",
          icon: "fas fa-leaf",
        },
      ],
      scrollTimeout: "",
    };
  },
  methods: {
    async countData(el, amount, time, after = "") {
      for (let i = 0; i <= amount; i++) {
        setTimeout(() => {
          el.textContent = `${i}${after}`;
        }, time / amount);
      }
      return;
    },
    counterTrigger() {
      const parent = document.querySelector(".counter-wrapper");
      const els = parent.querySelectorAll(".amount");
      const elements = Array.from(els);

      elements.map((el, index) => {
        this.countData(
          el,
          this.counterData[index].amount,
          2000,
          this.counterData[index].unit
        );
      });
    },
    triggerMethod() {
      const el = document.querySelector(".counter-container");
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        if (
          Math.abs(el.getBoundingClientRect().y) >= 0 &&
          Math.abs(
            el.getBoundingClientRect().y +
              el.getBoundingClientRect().height -
              500
          ) <= screen.height
        ) {
          this.counterTrigger();
          window.removeEventListener("scroll", this.triggerMethod);
        }
      }, 100);
    },
  },
  mounted() {
    this.triggerMethod();
    window.addEventListener("scroll", this.triggerMethod);
  },
};
</script>
<style lang="scss">
.counter-container {
  width: 100%;
  min-height: 500px;
  padding: 50px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: $color-secondary;

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
        color: $color-primary;
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

      transition: all 0.3s ease-in-out;

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
