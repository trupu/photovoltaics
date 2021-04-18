<template lang="pug">
    div
        div#projects-container
            div.photo-box(v-for="(photo, index) in images" :key="index" @click="openOverlayProgramaticallyWithContext(photo, index)")
                img(:src="photo.src" loading="lazy")
                div.info-box
                    p
                        | Lokalizacja: 
                        b
                            | {{ photo.location }}
                    p
                        | Moc: 
                        b
                            | {{ photo.power }}
        silent-box(:gallery="images" ref="silentbox")
        
</template>
<script>
import projects from "../../config/projects";

export default {
  name: "Projects",
  data() {
    return {
      images: [],
      projects,
    };
  },
  methods: {
    loadProjectsImages() {
      this.images = this.projects.map((project) => ({
        src: project.img,
        description: `Lokalizacja: ${project.location}, Moc: ${project.power}`,
        location: project.location,
        power: project.power,
        // thumbnailWidth: `${window.innerWidth / 4}px`,
        thumbnailWidth: 0,
      }));
    },
    // the index parameter is optional, however it should be set if you're opening
    // the overlay on different position than the beginning of the gallery
    openOverlayProgramaticallyWithContext(item, index = 0) {
      this.$refs.silentbox.openOverlay(item, index);
    },
  },
  created() {
    this.loadProjectsImages();
  },
};
</script>
<style lang="scss">
#projects-container {
  display: grid;

  grid-gap: 8px;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  & > .photo-box {
    width: 100%;

    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);

    height: calc(100vw / 4);

    position: relative;
    overflow: hidden;

    &:hover {
      cursor: pointer;

      .info-box {
        opacity: 0.7;
        transform: translateX(0);
        max-width: 80%;
      }
    }

    @media (max-width: 768px) {
      height: calc(100vw / 2);
    }

    @media (max-width: 1024px) {
      height: calc(100vw / 3);
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .info-box {
      position: absolute;
      bottom: 0;
      right: 0;

      display: flex;
      flex-flow: column;
      align-items: flex-start;
      justify-content: center;

      width: 100%;
      max-width: 0;
      height: 60px;

      padding: 8px;

      background-color: #fff;
      color: #000;

      opacity: 0;
      transform: translateX(100%);

      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
