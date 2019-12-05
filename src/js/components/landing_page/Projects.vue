<template lang="pug">
    section#projects
        div.projects_wrapper
            h3.projects_title
                | Ostatnie
                span.color-changer
                    | Projekty
            p.projects_description
                | Realizując projekty stawiamy na pełen profesjonalizm. Działamy na terenie Polski i Niemiec.
        div.projects_slider
            div.single-project(v-for='keys in projectData')
                img(:src='keys.img')
                p.project-content
                    i(:class='keys.icon')
                    span.name
                        | {{ keys.name }}
                    span.power
                        | {{ keys.power }}
</template>
<script>
import projectData from '../../mixins/project_slider';

export default {
    name: 'Projects',
    data() {
        return {
            projectData
        }
    }
}
</script>
<style lang="scss">
    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

    #projects {
        width: 100%;
        height: auto;

        .projects_wrapper {
            width: 100%;
            display: flex;
            flex-flow: column;

            align-items: center;
            justify-content: center;

            .projects_title {
                text-transform: uppercase;

                font-size: 1.8em;
                font-weight: 400;

                margin: 30px 0;

                span {
                    margin: 0 5px;
                }
            }

            .projects_description {
                width: 90%;

                text-align: center;
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
        }
    }
</style>