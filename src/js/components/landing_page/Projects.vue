<template lang="pug">
    section#projects
        div.projects_wrapper
            h3.projects_title.animation-onshow_right.animation-hide
                | Ostatnie
                span.color-changer
                    | Projekty
            p.projects_description.animation-onshow_right.animation-hide
                | Realizując projekty stawiamy na pełen profesjonalizm. Działamy na terenie Polski i Niemiec.
        div.projects_slider
        div.projects_calculator
            p.animation-onshow_left.animation-hide
                | Wyceń montaż paneli już dziś!
            router-link(to='/kalkulator').animation-onshow_right.animation-hide
                button.button-medium_reverse
                    | Kalkulator
        <Animation />
</template>
<script>
import projectData from "../../mixins/project_slider";
import Animation from "../Animation.vue";

export default {
  name: "Projects",
  data() {
    return {
      projectData,
      sliderInterval: "",
      currentIndex: "",
    };
  },
  components: {
    Animation,
  },
  methods: {
    showRandomProject() {
      this.currentIndex = Math.floor(Math.random() * this.projectData.length);

      this.createProjectSlide(this.currentIndex);
    },
    //  generating single-project DOM
    createProjectSlide(index) {
      const ps = document.querySelector(".projects_slider");

      //  single-project
      const sp = document.createElement("div");
      sp.classList.add("single-project");
      ps.appendChild(sp);

      //  project-image
      const pi = document.createElement("div");
      pi.classList.add("project-image");
      sp.appendChild(pi);
      //  img
      const img = document.createElement("img");
      img.setAttribute("src", this.projectData[index].img);
      pi.appendChild(img);

      //  project-content
      const pc = document.createElement("div");
      pc.classList.add("project-content");
      sp.appendChild(pc);
      //  icon
      const i = document.createElement("i");
      i.classList = this.projectData[index].icon;
      pc.appendChild(i);
      //  name
      const n = document.createElement("span");
      n.classList.add("name");
      n.textContent = this.projectData[index].name;
      pc.appendChild(n);
      //  power
      const p = document.createElement("span");
      p.classList.add("power");
      p.textContent = this.projectData[index].power;
      pc.appendChild(p);

      sp.style.opacity = "1";
    },
    sliderEngine() {
      const active = document.querySelector(".single-project");
      const activeContent = document.querySelector(".project-content");

      active.style.opacity = "0";
      active.style.zIndex = "-1";
      activeContent.style.opacity = "0";
      activeContent.style.zIndex = "-1";

      // incrementing currentIndex
      this.projectData[this.currentIndex + 1]
        ? this.currentIndex++
        : (this.currentIndex = 0);
      this.createProjectSlide(this.currentIndex);

      setTimeout(() => {
        active.remove();
      }, 500);
    },
  },
  mounted() {
    this.showRandomProject();
    this.sliderInterval = setInterval(() => {
      this.sliderEngine();
    }, 4000);
  },
  destroyed() {
    clearInterval(this.sliderInterval);
  },
};
</script>
<style lang="scss">
@keyframes showSlideContainer {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes showSlideContent {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

#projects {
  width: 100%;
  height: auto;
  position: relative;

  .projects_wrapper {
    width: 100%;
    display: flex;
    flex-flow: column;

    align-items: center;
    justify-content: center;
    background-color: $color-secondary;
    padding-bottom: 30px;

    .projects_title {
      text-transform: uppercase;

      font-size: 1.8em;
      font-weight: 400;

      margin: 30px 0;

      span {
        font-size: 1.1em;
        color: $color-secondary-light;
        margin: 0 5px;
      }
    }

    .projects_description {
      width: 90%;
      font-size: 1.2em;
      color: #000;
      text-align: center;
    }
  }

  .projects_slider {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 300px;

    position: relative;

    .single-project {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: auto;

      position: absolute;
      top: 0;
      left: 0;

      transition: opacity 0.5s ease-in-out;

      animation: showSlideContainer 0.5s ease-in-out both;

      .project-image {
        width: 100%;
        height: 300px;

        img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
      }

      .project-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        z-index: 40;

        position: absolute;
        top: 0;
        left: 0;

        opacity: 0;
        //transform: translateX(-100%);

        width: 100%;
        height: 300px;
        background-color: #fff;
        color: $color-secondary;

        transition: all 0.5s ease-in-out;

        i {
          font-size: 3em;
          margin: 10px 0;
        }

        span {
          font-size: 1.2em;
          line-height: 2;
        }
      }

      &:hover {
        .project-content {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }

  .projects_calculator {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    position: relative;

    width: 100%;
    background-color: $color-secondary;
    color: #fff;

    p {
      font-size: 1.5em;
      margin: 10px 0;
    }

    button {
      margin: 10px 0;
    }
  }
}

@media (min-width: 768px) {
  #projects {
    .projects_wrapper {
      .projects_description {
        width: 60%;
      }
    }

    .projects_slider {
      .single-project {
        flex-flow: row;
        background-color: #fff;

        .project-image {
          width: 50%;
        }

        .project-content {
          transition: opacity 0.5s ease-in-out;
          animation: showSlideContent 1s ease-in-out both;
          width: 50%;

          position: relative;
          opacity: 1;
          transform: translateX(0);
        }
      }
    }

    .projects_calculator {
      flex-flow: row;

      p {
        font-size: 2em;
        margin: 20px 10px;
      }

      button {
        margin: 20px 10px;
      }
    }
  }
}
</style>
