<template lang="pug">
    div.contact-data
        h4.contact-data_header.animation-onshow_left.animation-hide
            | Dane kontaktowe
        div.contact-data_content.animation-onshow_left.animation-hide
            a.content__data(v-for='key in contactData' v-if='key.link != "#"'  :href='key.link' target='_blank')
                i(:class='key.icon')
                p
                    | {{ key.name }}
            a.content__data(v-for='key in contactData' v-if='key.link == "#"'  :href='key.link')
                i(:class='key.icon')
                p
                    | {{ key.name }}
        <Animation />
</template>
<script>
import Animation from "../Animation.vue";
import SOCIALS from "../../config/socials";

export default {
  name: "contactData",
  components: {
    Animation,
  },
  data() {
    return {
      contactData: [
        {
          name: "Facebook",
          icon: "fab fa-facebook-f",
          link: SOCIALS.FACEBOOK,
        },
        {
          name: SOCIALS.EMAIL,
          icon: "far fa-envelope",
          link: `mail:${SOCIALS.EMAIL}`,
        },
        {
          name: `${SOCIALS.PHONE[0].formatted} - ${SOCIALS.PHONE[0].owner}`,
          icon: "fas fa-phone",
          link: `tel:${SOCIALS.PHONE[0].normal}`,
        },
        {
          name: `${SOCIALS.PHONE[1].formatted} - ${SOCIALS.PHONE[1].owner}`,
          icon: "fas fa-phone",
          link: `tel:${SOCIALS.PHONE[1].normal}`,
        },
        {
          name: "Kożuchowska 15A 415-416, 65-001 Zielona Góra",
          icon: "fas fa-map-marker-alt",
          link: "#",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.contact-data {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;

  text-align: left;

  width: 100%;
  margin: 50px 0;

  .contact-data_header {
    font-size: 1.5em;
    font-weight: 400;
    margin: 0;
    margin-bottom: 20px;

    width: 100%;
    text-align: left;
  }

  .contact-data_content {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    .content__data {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      margin-bottom: 10px;

      text-decoration: none;
      color: #000;

      i {
        width: 30px;
        font-size: 1.2em;
        color: $color-secondary;
        margin-right: 10px;
      }
    }
  }
}

@media (min-width: 768px) {
  .contact-data {
    margin: 0;
  }
}
</style>
