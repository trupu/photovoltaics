<template lang="pug">
    section#title(v-if='$store.state.header.renderPath')
            div.title-wrapper
                div.title
                    span.title-regular
                        | {{ $store.state.header.title }}
                    span.color-changer
                        | {{ $store.state.header.subtitle }}
                div.description
                    p
                        | {{ $store.state.header.description }}
            div.path-wrapper
                span.regular
                    | Przeglądasz: 
                div.link
                    router-link.bold(to='/')
                        | Start
                    span.regular
                        | / {{ $store.state.header.path }}
</template>
<script>
export default {
  name: "Title",
};
</script>
<style lang="scss">
#title {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 50;

  margin-top: 60px;
  padding: 0 10px;

  &.on-calculator-page {
    .description {
      color: $color-secondary-light !important;
    }

    .link {
      color: $color-secondary-light !important;

      a {
        color: #000 !important;
      }
    }
  }

  .title-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;

    .title {
      font-size: 1.2em;
      text-transform: uppercase;

      .color-changer {
        margin: 0 5px;
        font-size: 1.2em;
      }
    }

    .description {
      font-size: 0.8em;
      margin: 5px 0;
      text-align: left;
      color: #555;
    }
  }

  .path-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    text-align: center;

    .regular {
      font-size: 0.8em;
      margin: 0;
    }

    .link {
      font-size: 1em;
      color: #555;

      a {
        font-size: 0.8em;
        text-decoration: none;
        font-weight: 700;
        color: #000;
        margin: 0 5px;
      }
    }
  }
}

@media (min-width: 768px) {
  #title {
    width: 80%;
    padding: 0;

    .path-wrapper {
      flex-flow: row;
    }
  }
}
</style>
