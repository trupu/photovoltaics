<template lang="pug">
    silent-box(:gallery="images")
        
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
        description: project.name,
        thumbnailWidth: `${window.innerWidth / 4}px`,
      }));
    },
  },
  created() {
    this.loadProjectsImages();
  },
};
</script>
<style lang="scss">
#silentbox-gallery {
  display: grid;

  grid-gap: 8px;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & > .silentbox-item {
    width: 100%;

    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);

    height: calc(100vw / 4);

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
  }
}
</style>
