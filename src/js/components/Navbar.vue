<template lang="pug">
    nav#navbar(:class="[navbarClass]")
        div.switcher(class='menu-changer' @click='toggleMenu()')
            span(v-if='!menuShowed') 
                | menu
            i(class='fas fa-bars' v-if='!menuShowed')
            i(class='fas fa-times' v-if='menuShowed')
        div.navbar-wrapper
            img.logo(src="../../img/logo.png")
            ul
                li.link(@click='toggleMenu()')
                    router-link(to="/") 
                        | Strona Główna
                li.link(@click='toggleMenu()')
                    router-link(to="/oferta")
                        | Oferta
                li.link(@click='toggleMenu()')
                    router-link(to="/firma")
                        | O Firmie
                li.link(@click='toggleMenu()')
                    router-link(to="/kalkulator")
                        | Kalkulator
                li.link(@click='toggleMenu()')
                    router-link(to="/kontakt")
                        | Kontakt
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuShowed: false,
      menuTimeout: "",
      navTimeout: "",
      navbarClass: "",
    };
  },
  methods: {
    getNavbarClass() {
      this.navbarClass = window.scrollY > 50 ? "fixed-background" : "";
    },
    toggleMenu() {
      if (window.innerWidth > 768) return;

      clearInterval(this.menuTimeout);

      // toggle buttons

      const button = document.querySelector(".menu-changer");

      button.style.animation = "disappear .3s forwards ease-in-out";
      this.menuTimeout = setTimeout(() => {
        this.menuShowed === false
          ? (this.menuShowed = true)
          : (this.menuShowed = false);
        const b = document.querySelector(".menu-changer");
        b.style.animation = "appear .3s ease-in-out forwards";
        b.style.color = "$lightCyan";
      }, 300);

      // toggle menu

      const menu = document.querySelector(".navbar-wrapper");
      menu.style.display = "flex";
      setTimeout(() => {
        this.menuShowed === false
          ? (menu.style.animation = "showMenu .5s ease-in-out both")
          : (menu.style.animation = "hideMenu .5s ease-in-out both");
        const links = document.querySelectorAll(".link");
        if (this.menuShowed === false) {
          links.forEach((el, index) => {
            el.style.animation = `showLink .3s ${0.3 +
              0.05 * index}s both ease-in-out`;
          });
        } else {
          const nav = document.querySelector("#navbar");
          nav.style.height = "60px";
          links.forEach((el, index) => {
            el.style.animation = "";
          });
        }
      }, 10);
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      clearTimeout(this.navTimeout);
      this.navTimeout = setTimeout(() => {
        this.getNavbarClass();
      }, 50);
    });
  },
};
</script>
<style lang="scss">
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes disappear {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
}

@keyframes showLink {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes showMenu {
  0% {
    opacity: 0;
    transform: translateY(-1000px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hideMenu {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-1000px);
  }
}

#navbar {
  width: 100%;
  height: auto;

  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  min-height: 60px;
  transition: background 0.3s ease-in-out;

  &.fixed-background {
    background-color: $color-fixed-navbar;
  }

  .switcher {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;

    position: absolute;
    top: 10px;
    right: 5%;
    color: $color-secondary-light;
    z-index: 150;

    &:hover {
      color: $color-secondary-light;
      cursor: pointer;
    }

    span {
      font-size: 2em;
    }

    i {
      opacity: 1;
      z-index: 100;

      font-size: 2.5em;

      margin: 0 10px;

      transition: all 0.3s ease-in-out;
    }
  }

  .navbar-wrapper {
    height: 100vh;
    width: 100;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-primary-dark;
    display: none;
    transform: translateY(-1000px);

    position: relative;

    .logo {
      position: absolute;
      left: 10%;
      top: 0;

      margin-top: -25px;
      height: 120px;
      width: auto;
    }

    ul {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      list-style-type: none;

      padding: 0;
      margin: 0;

      width: 100%;

      .link {
        width: 100%;
        line-height: 2;
        text-align: center;

        transition: all 0.3s ease-in-out;

        a {
          text-decoration: none;
          color: #fff;
          text-transform: uppercase;
          font-size: 1.4em;
          text-shadow: 0 0 2px #000;

          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;

          transition: all 0.3s ease-in-out;
        }

        &:hover {
          background-color: #fff;
          cursor: pointer;

          a {
            color: $color-secondary-light;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  #navbar {
    height: 60px;

    .switcher {
      display: none;
    }

    .navbar-wrapper {
      display: flex;
      justify-content: flex-end;
      height: 60px;
      transform: translateY(0);
      opacity: 1;
      animation: none;
      background: none;
      padding: 0 10% 0 10%;

      ul {
        flex-flow: row;
        justify-content: flex-end;
        font-size: 0.6em;
        width: 80%;

        .link {
          text-align: center;
          width: auto;
          margin: 0 10px;

          &:hover {
            background: none;
          }
        }

        .link:last-child {
          margin-right: 50px;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  #navbar {
    .navbar-wrapper {
      ul {
        width: 90%;
        font-size: 0.9em;

        .list {
          margin: 0 30px;
        }
      }
    }
  }
}
</style>
