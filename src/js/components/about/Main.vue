<template lang="pug">
    div.main-container
        p.main-content.animation-onshow_left.animation-hide
            |   <span class='margin'></span>Jako firma działamy na rynku od 2020 roku, jednak w branży jesteśmy od 2016r. Nie brakuje u nas także świeżej krwi. Stale zatrudniamy i szkolimy młodych specjalistów do spraw montażu. Wyróżniamy się bardzo indywidualnym podejściem do klienta. Zawsze staramy się dobrać idealne rozwiązanie, adekwatne do Państwa oczekiwań. Współpracujemy ze znanymi w naszych rejonach firmami. Cechujemy się otwartością na propozycje, oraz bardzo dobrym doradztwem ds. montażu paneli fotowoltaicznych i nie tylko!
        <Animation />
</template>
<script>
import Animation from "../Animation.vue";

export default {
  name: "Main",
  components: {
    Animation,
  },
};
</script>
<style lang="scss">
.main-container {
  width: 80%;
  margin: 50px 0 100px 0;

  .main-content {
    text-align: center;
    width: 100%;
    line-height: 1.5;

    .margin {
      margin-right: 30px;
    }
  }
}

@media (min-width: 768px) {
  .main-container {
    .main-content {
      text-align: left;
    }
  }
}
</style>
