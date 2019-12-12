<template lang="pug">
    section#PVDescription
        div.pv-title
            h3.title
                | Czym jest
                span.color-changer
                    | Fotowoltaika
            p.subtitle
                | No okej, ale czym jest fotowoltaika i czym różnią się panele PV od słonecznych?
        div.pv-content
            | Główną różnicą pomiędzy kolektorami słonecznymi, a panelami fotowoltaicznymi jest sposób zamiany energii słonecznej. 
            <br /><br />
            | Kolektory słoneczne zamieniają energię słoneczną na energię cieplną, dlatego służą głównie do przygotowania ciepłej wody użytkowej (c.w.u.). Mała instalacja z 2–3 kolektorami pokrywa ok. 50% rocznego zapotrzebowania na energię niezbędną do podgrzania c.w.u. dla 4-osobowej rodziny.
            <br /><br />
            | Panele Fotowoltaiczne natomiast uzyskują prąd elektryczny - czystą energię, którą można wykorzystać w dowolny sposób. Priorytet ma zasilanie domowych urządzeń elektrycznych, bo w ten sposób zmniejszamy zużycie dość drogiego przecież prądu z sieci. Podłączając się do sieci udostępniamy uzyskany przez nas nadmiar energii, dzięki czemu zimą, gdy panele są mniej wydajne, prąd uzyskujemy właśnie z sieci, a w rozliczeniu rocznym jesteśmy na 0, często nawet na plus.
</template>
<script>
export default {
    name: 'PVDescription'
}
</script>
<style lang="scss">
    
    #PVDescription {
        width: 100%;
        height: auto;
        margin: 100px 0;

        .pv-title {
            width: 100%;
            text-align: left;
            margin-left: 10px;
            margin-bottom: 30px;

            .title {
                font-size: 1.5em;

                .color-changer {
                    margin: 0 5px;
                    font-size: 1.2em;
                }
            }

            .subtitle {
                font-size: .8em;
            }
        }

        .pv-content {
            font-size: 1em;
        }
    }

    @media (min-width: 768px) {
        
        #PVDescription {
            .pv-title {
                margin-left: 0;
            }
        }
    }

</style>
