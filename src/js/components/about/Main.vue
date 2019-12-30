<template lang="pug">
    div.main-container
        p.main-content
            |   <span class='margin'></span>Działamy na rynku od X roku. Jak widać mamy sporo doświadczenia, jednak nie brakuje u nas także świeżej krwi. Stale zatrudniamy i szkolimy młodych specjalistów do spraw montażu. Wyróżniamy się bardzo indywidualnym podejściem do klienta. Zawsze staramy się dobrać idealne rozwiązanie, adekwatne do Państwa oczekiwań. Współpracujemy ze znanymi w naszych rejonach firmami. Cechujemy się otwartością na propozycje, oraz bardzo dobrym doradztwem ds. montażu paneli fotowoltaicznych.
</template>
<script>
export default {
    name: 'Main'
}
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
