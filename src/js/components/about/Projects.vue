<template lang="pug">
    div#projects
        p.projects-header
            | Nasze Projekty
        div#projects-container
        div.button-wrapper
            button.button-medium(v-if='imagesAvailable' @click='getProject(currentIndex, 6)')
                | Pokaż Więcej
</template>
<script>
import projectsArray from '../../mixins/projects_about';
import Buttons from '../../components/Buttons.vue';

export default {
    name: 'Projects',
    data() {
        return {
            projectsArray,
            currentIndex: 0,
            imagesAvailable: true
        }
    },
    components: {
        Buttons
    },
    methods: {
        getProject(index, amount) {
            const array = this.projectsArray;
            for (let i = index; i < (index+amount); i++) {
                if (i >= this.projectsArray.length) {
                    this.imagesAvailable = false;
                    break;
                }
                this.createProjectStructure(array[i]);
                this.currentIndex++;
            }
        },
        // creating DOM structure
        createProjectStructure(el) {
            const parent = document.querySelector('#projects-container');

            const div = document.createElement('div');
            div.classList.add('single-project');
            
            if (el.name) {
                const p_name = document.createElement('p');
                p_name.classList.add('name');
                p_name.textContent = `${el.name}`;
                div.appendChild(p_name);
            }

            if (el.img) {
                const div_img = document.createElement('div');
                div_img.classList.add('img');
                
                const img = document.createElement('img');
                img.setAttribute('src', `./img/about_projects/${el.img}`);

                div_img.appendChild(img);
                div.appendChild(div_img);
            }

            if (el.desc) {
                const p_desc = document.createElement('p');
                p_desc.classList.add('desc');
                p_desc.textContent = `${el.desc}`;
                div.appendChild(p_desc);
            }

            if (el.date) {
                const p_date = document.createElement('p');
                p_date.classList.add('date');
                p_date.textContent = `${el.date}`;
                div.appendChild(p_date);
            }

            parent.appendChild(div);
        }
    },
    mounted() {
        this.getProject(this.currentIndex, 6);
    }
}
</script>
<style lang="scss">

    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    #projects {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        width: 100%;

        .projects-header {
            width: 100%;
            text-align: center;
            font-size: 1.5em;
            text-transform: uppercase;

            margin: 50px 0 20px 0;
        }


        #projects-container {
            width: 100%;
            min-height: 300px;

            display: grid;
            grid-auto-columns: 1fr;

            align-items: center;
            justify-content: center;
            grid-gap: 20px 0;

            margin: 0;

            .single-project {
                width: 100%;
                height: 100%;
                min-height: 300px;
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;

                .name {
                    text-transform: uppercase;
                    font-weight: 700;
                    width: 100%;
                    text-align: center;
                    font-size: 1.2em;
                    color: $lightCyan;
                    padding: 5px;
                    margin: 10px 0;
                }

                .desc {
                    width: 100%;
                    text-align: center;
                    font-size: 1em;
                    color: #000;
                    padding: 5px;
                    margin: 5px 0;
                }

                .date {
                    width: 100%;
                    text-align: center;
                    font-size: .8em;
                    color: #000;
                    padding: 5px;
                    margin: 5px 0;
                }

                .img {
                    width: 100%;
                    height: 300px;
                    box-shadow: 0px 0px 5px 1px #000;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 300px;
                        object-fit: cover;

                        transition: all 1s ease-out;
                        &:hover {
                            transform: scale(1.4);
                        }
                    }
                }
            }
        }

        .button-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;

            margin: 50px 0;

            button {
                border: 1px solid $darkCyan;

                &:hover {
                    border-color: $lightCyan;
                    background-color: $lightCyan;
                    border-radius: 5px;
                }
            }
        }
    }

@media (min-width: 480px) {
    #projects {
        #projects-container {
            justify-items: center;

            .single-project {
                width: 80%;
            }
        }
    }
}

@media (min-width: 768px) {
    #projects {
        #projects-container {
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px 10px;    


            .single-project {
                width: 100%;
            }
        }
    }
}

@media (min-width: 1024px) {
    #projects {
        #projects-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}

@media (min-width: 1440px) {
    #projects {
        #projects-container {
            width: 80%;
        }
    }
}

@media (min-width: 1920px) {
    #projects {
        #projects-container {
            grid-template-columns: repeat(4, 1fr); 
        }
    }
}

</style>
