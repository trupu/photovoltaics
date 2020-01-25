<template lang="pug">
    form.contact-form.animation-onshow_right.animation-hide
        h4.contact-form_header
            | Formularz Kontaktowy
        label
            | Imie (wymagane)
            input(type='text' name='name')
        label
            | adres email (wymagane)
            input(type='email' name='email')
        label
            | Temat (wymagane)
            input(type='text' name='topic')
        label
            | Twoja Wiadomość (wymagane)
            textarea(rows='5' cols='10')
        div.button-wrapper
            button.button-small
                | Wyślij
        <Animation />
</template>
<script>
import Buttons from '../../components/Buttons.vue';
import Animation from '../Animation.vue';

export default {
    name: 'contactForm',
    components: {
        Animation
    }
}
</script>
<style lang="scss">
    
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    .contact-form {
        display: flex;
        flex-flow: column;

        align-items: center;
        justify-content: flex-start;

        width: 100%;

        .contact-form_header {
            width: 100%;
            text-align: left;

            font-size: 1.5em;
            font-weight: 400;
            
            margin: 0;
            margin-bottom: 20px;
        }

        label {
            display: flex;
            flex-flow: column;

            align-items: flex-start;
            justify-content: flex-start;

            width: 100%;
            font-size: .8;
            color: #444;

            margin-bottom: 10px;

            input {
                width: 100%;
                height: 1.3em;

                margin-top: 5px;

                font-size: 1.2em;
                border: none;
                border-bottom: 1px solid $lightCyan;
                color: #000;
            }

            textarea {
                width: 100%;

                font-size: 1.2em;
                border: 1px solid $lightCyan;
                color: #000;
            }
        }

        .button-wrapper {

            width: 100%;
            display: flex;
            justify-content: flex-start;

            button {
                margin: 20px 0;

                &:hover {
                    background-color: $lightCyan;
                    border: 1px solid $lightCyan;
                }
            }
        }
    }

</style>
