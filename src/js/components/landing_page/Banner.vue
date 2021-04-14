<template lang="pug">
    section#banner
        
</template>
<script>
import Buttons from "../Buttons.vue";
import bannerArray from "../../mixins/banner";

export default {
  name: "Banner",
  components: {
    Buttons,
  },
  data() {
    return {
      bannerArray,
      currentIndex: 0,
      bannerInterval: "",
    };
  },
  methods: {
    // buttons router (router-link)
    routerLinkMethod(url) {
      this.$router.push(url);
    },

    // creating Banner`s DOM Structure
    createBannerInstance(parentElement, content) {
      const bg = document.createElement("div");
      bg.classList.add("banner-background");
      bg.style.backgroundImage = `url(${content.img})`;
      parentElement.appendChild(bg);

      const wrapper = document.createElement("div");
      wrapper.classList.add("banner-wrapper");
      parentElement.appendChild(wrapper);

      const bt = document.createElement("div");
      bt.classList.add("banner-title");
      bt.textContent = content.title;
      wrapper.appendChild(bt);

      const bs = document.createElement("div");
      bs.classList.add("banner-subtitle");
      bs.textContent = content.subtitle;
      wrapper.appendChild(bs);

      const bb = document.createElement("div");
      bb.classList.add("banner-buttons");

      const button1 = document.createElement("button");
      button1.classList.add("button-medium");
      button1.textContent = content.text1;
      button1.addEventListener("click", () => {
        this.routerLinkMethod(content.url1);
      });
      bb.appendChild(button1);

      const button2 = document.createElement("button");
      button2.classList.add("button-medium_reverse");
      button2.textContent = content.text2;
      button2.addEventListener("click", () => {
        this.routerLinkMethod(content.url2);
      });
      bb.appendChild(button2);

      wrapper.appendChild(bb);
    },
    // slider
    bannerSetTransition(time) {
      this.currentIndex = Math.floor(Math.random() * this.bannerArray.length);
      const current = document.querySelector("#banner");

      this.bannerTransition(current, time);

      this.bannerInterval = setInterval(() => {
        this.bannerTransition(current, time);
      }, time);
    },
    //slider
    bannerTransition(current, time) {
      this.createBannerInstance(current, this.bannerArray[this.currentIndex]);
      this.bannerArray[this.currentIndex + 1]
        ? this.currentIndex++
        : (this.currentIndex = 0);

      const currentArray = Array.from(current.children);

      setTimeout(() => {
        currentArray.map((el) => (el.style.opacity = 0));
      }, time - 10);

      setTimeout(() => {
        currentArray.map((el) => el.remove());
      }, time + 510);
    },
  },
  mounted() {
    this.bannerSetTransition(10000);
  },
  destroyed() {
    clearInterval(this.bannerInterval);
  },
};
</script>
<style lang="scss">
@keyframes showBannerBg {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes showBannerContent {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

#banner {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  color: #fff;
  text-shadow: 0 0 5px #000;
  background-color: $color-secondary-light;

  text-align: center;
  padding: 0 10px;

  position: relative;

  .banner-wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    transition: all 0.3s ease-in-out;
  }

  .banner-background {
    background-image: url("../../../img/landingpage/panel.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 1;

    transition: opacity 0.5s ease-in-out;
    animation: showBannerBg 0.5s ease-in-out both;
  }

  .banner-title {
    font-size: 3em;
    text-transform: uppercase;
    font-weight: 700;

    width: 100%;

    z-index: 2;
    transition: all 0.3s ease-in-out;
    animation: showBannerContent 0.3s 0.05s ease-in-out both;
  }

  .banner-subtitle {
    width: 100%;

    text-align: center;
    font-size: 1.5em;
    margin-bottom: 20px;

    z-index: 2;
    transition: all 0.3s ease-in-out;
    animation: showBannerContent 0.3s 0.1s ease-in-out both;
  }

  .banner-buttons {
    display: flex;
    flex-flow: column;

    width: 100%;
    align-items: center;
    justify-content: center;

    z-index: 2;
    transition: all 0.3s ease-in-out;
    animation: showBannerContent 0.3s 0.2s ease-in-out both;

    button {
      margin: 10px 0;
    }
  }
}

@media (min-width: 768px) {
  #banner {
    background-size: cover;

    .banner-subtitle {
      width: 50%;
    }

    .banner-buttons {
      flex-flow: row;

      button {
        margin: 0 20px;
      }
    }
  }
}
</style>
