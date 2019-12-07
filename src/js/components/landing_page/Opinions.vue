<template lang="pug">
    section#opinions
        div.opinion-title
            h3.title
                | Co mówią o nas
                span.color-changer
                    | KLIENCI
        div.opinions-slider
</template>
<script>
import opinionsData from '../../mixins/opinions';

export default {
    name: 'Opinions',
    data() {
        return {
            opinionsData,
            currentIndex: '',
            opinionsInterval: ''
        }
    },
    methods: {
        showRandomOpinion() {
            this.currentIndex = Math.floor(Math.random() * this.opinionsData.length);

            this.createOpinionContainer(this.currentIndex);
        },
        createOpinionContainer(index) {
            //  opinions-slider
            const os = document.querySelector('.opinions-slider');

            //  single-opinion
            const so = document.createElement('div');
            so.classList.add('single-opinion');
            os.appendChild(so);

            // opinion-content
            const oc_p = document.createElement('p');
            oc_p.classList.add('opinion-content');
            oc_p.textContent = this.opinionsData[index].content;
            so.appendChild(oc_p);

            //  opinion-signature
            const os_p = document.createElement('p');
            os_p.classList.add('opinion-signature');
            so.appendChild(os_p);

            //  name
            const n = document.createElement('span');
            n.classList.add('name');
            n.textContent = this.opinionsData[index].name;
            os_p.appendChild(n);

            const c = document.createElement('span');
            c.classList.add('city');
            c.textContent = this.opinionsData[index].city;
            os_p.appendChild(c);
        },
        opinionsEngine() {
            const active = document.querySelector('.single-opinion');

            active.style.opacity = '0';

            (this.opinionsData[this.currentIndex+1]) ? this.currentIndex++ : this.currentIndex = 0;
            this.createOpinionContainer(this.currentIndex);

            setTimeout(() => {
                active.remove();
            }, 500);
        }
    },
    mounted() {
        this.showRandomOpinion();
        this.opinionsInterval = setInterval(() => {
            this.opinionsEngine();
        }, 8000);
    },
    destroyed() {
        clearInterval(this.opinionsInterval);
    }
}
</script>
<style lang="scss">

@keyframes showOpinionContent {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

    #opinions {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        padding: 100px 10px;

        .opinion-title {
            display: flex;
            align-items: center;
            justify-content: center;

            .title {
                width: 100%;
                text-align: center;
                font-size: 1.8em;
                font-weight: 400;
                text-transform: uppercase;

                span {
                    margin: 0 5px;
                }
            }
        }

        .opinions-slider {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 200px;
            margin: 30px 0;
            position: relative;

            .single-opinion {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;

                position: absolute;
                top: 0;
                left: 0;

                transition: all .3s ease-in-out;

                width: 100%;
                color: #000;

                .opinion-content {
                    font-size: 1em;
                    width: 100%;
                    text-align: center;

                    animation: showOpinionContent .5s ease-in-out both;
                }

                .opinion-signature {
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    justify-content: center;

                    width: 100%;
                    margin: 10px 0;
                    .name {
                        font-size: .8em;

                        animation: showOpinionContent .7s ease-in-out both;
                    }

                    .city {
                        font-size: .6em;

                        animation: showOpinionContent .8s ease-in-out both;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        #opinions {
            .opinions-slider {
                width: 60%;
            }
        }
    }
</style>
