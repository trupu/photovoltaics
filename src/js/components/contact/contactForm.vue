<template lang="pug">
    form.contact-form.animation-onshow_right.animation-hide
        h4.contact-form_header
            | Formularz Kontaktowy
        label
            | Imie (wymagane)
            input(type='text' name='name' v-model='form.name')
        label
            | adres email (wymagane)
            input(type='email' name='email' v-model='form.mail')
        label
            | Temat (wymagane)
            input(type='text' name='topic' v-model='form.topic')
        label
            | Twoja Wiadomość (wymagane)
            textarea(rows='5' cols='10' v-model='form.message')
        div.button-wrapper
            button.button-small(@click='sendMessage()')
                | Wyślij  
            p.error-message(:class='errorClass')
                | {{ error }} 
        <Animation />
</template>
<script>
import Buttons from "../../components/Buttons.vue";
import Animation from "../Animation.vue";

export default {
  name: "contactForm",
  components: {
    Animation,
  },
  data() {
    return {
      form: {
        name: "",
        mail: "",
        topic: "",
        message: "",
      },
      error: "",
      errorClass: "",
    };
  },
  methods: {
    // validating form
    validateForm() {
      this.error = "";
      this.errorClass = "";

      if (this.form.name.length < 1) {
        this.error = "Wprowadź imię.";
        this.errorClass = "error-red";
        return false;
      }

      if (
        this.form.mail.length < 1 ||
        !this.form.mail.includes("@") ||
        !this.form.mail.includes(".")
      ) {
        this.error = "Wprowadź poprawny adres email.";
        this.errorClass = "error-red";
        return false;
      }

      if (this.form.topic.length < 1) {
        this.error = "Wprowadź temat.";
        this.errorClass = "error-red";
        return false;
      }

      if (this.form.message.length < 1) {
        this.error = "Twoja wiadomość jest za krótka.";
        this.errorClass = "error-red";
        return false;
      }
      return true;
    },
    // sending email / avoiding spam mechanics
    sendMessage() {
      event.preventDefault();
      if (!this.validateForm()) return;
      if (localStorage.getItem("lastlySend")) {
        let date =
          (Date.now() - localStorage.getItem("lastlySend")) / 1000 / 60;
        let mins = 60 - Math.round(date);
        if (date < 60) {
          this.error = `Wysłanie wiadomości nie powiodło się(blokada anty-spam).\nSpróbuj ponownie za: ${mins} minut :)`;
          this.errorClass = "error-red";
          return;
        }
      }
      // sending
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "strubilowicz@zsp5kozuchow.pl",
        Password: "C874E2408725531AA590776014BD98F28451",
        To: "trupeusz@gmail.com",
        From: this.form.mail,
        Subject: this.form.topic,
        Body: `Wiadomość przesłana ze strony fotowoltaika-grzegorz.pl<br /><br />${this.form.message}<br /><br />email wysyłającego: ${this.form.mail}`,
      }).then((message) => {
        if (message === "OK") {
          this.error = "Twoja wiadomość została wysłana pomyślnie :)";
          this.errorClass = "error-green";
          localStorage.setItem("lastlySend", Date.now());
        } else {
          console.log(message);
          this.error = `Wysłanie wiadomości nie powiodło się :(\n Mogło być to spowodowane błędem serwera. Spróbuj ponownie później, jeśli sytuacja się powtórzy proszę o kontakt telefoniczny.`;
          this.errorClass = "error-red";
        }
      });
    },
  },
};
</script>
<style lang="scss">
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
    font-size: 0.8;
    color: #444;

    margin-bottom: 10px;

    input {
      width: 100%;
      height: 1.3em;

      margin-top: 5px;

      font-size: 1.2em;
      border: none;
      border-bottom: 1px solid $color-primary;
      color: #000;
    }

    textarea {
      width: 100%;

      font-size: 1.2em;
      border: 1px solid $color-primary;
      color: #000;
    }
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    position: relative;

    button {
      margin: 20px 0;

      &:hover {
        background-color: $color-primary;
        border: 1px solid $color-primary;
      }
    }

    .error-message {
      width: 100%;
      text-align: center;
      position: absolute;
      left: 0;
      bottom: -50px;
    }

    .error-red {
      color: rgb(255, 38, 0);
    }

    .error-green {
      color: rgb(37, 243, 10);
    }
  }
}
</style>
