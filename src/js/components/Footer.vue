<template lang="pug">
    section#footer
        div.footer-wrapper
            div.single-link(v-for='key in links')
                a(:href='key.url' v-if='key.target' target='blank')
                    i(:class='key.icon')
                    span.name
                        | {{ key.name }}
                router-link(:to='key.url' v-if='!key.target')
                    i(:class='key.icon')
                    span.name
                        | {{ key.name }}
        div.author
            p.content
                | Zaprojektowano i wykonano |
            a(href='https://strubilowicz.netlify.com' target='blank')
                | Sławomir Trubiłowicz
</template>
<script>
import SOCIALS from "../config/socials";

export default {
  name: "Footer",
  data() {
    return {
      links: [
        {
          icon: "fab fa-facebook-f",
          name: "Facebook",
          url: SOCIALS.FACEBOOK,
          target: true,
        },
        {
          icon: "far fa-envelope",
          name: SOCIALS.EMAIL,
          url: "/kontakt",
          target: false,
        },
        {
          icon: "fas fa-phone",
          name: SOCIALS.PHONE[0].formatted,
          url: `tel:${SOCIALS.PHONE[0].normal}`,
          target: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
#footer {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 300px;
  padding: 10px 5px;

  background-color: $color-secondary;

  .footer-wrapper {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;

    .single-link {
      a {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: darken($color-secondary, 10%);

        margin: 0 15px;

        transition: all 0.3s ease-in-out;

        i {
          font-size: 2em;
        }
        .name {
          margin: 5px 0;
          font-size: 0.8em;
        }

        &:hover {
          color: lighten($color-primary, 10%);
          cursor: pointer;

          transform: scale(1.2);
        }
      }
    }
  }

  .author {
    font-size: 0.8em;
    color: darken($color-secondary, 10%);

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;

    a {
      font-size: 1.1em;
      color: $color-primary;
      text-decoration: none;
      margin: 0 5px;
    }
  }
}

@media (min-width: 768px) {
  #footer {
    .footer-wrapper {
      .single-link {
        font-size: 1.5em;
      }
    }

    .author {
      font-size: 1em;
      margin-top: 50px;
    }
  }
}
</style>
