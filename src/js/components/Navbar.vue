<template lang="pug">
    nav#navbar
        i(class='fas fa-bars menu-changer' v-if='!menuShowed' @click='toggleMenu()')
        i(class='fas fa-times menu-changer' v-if='menuShowed' @click='toggleMenu()')
        div.navbar-wrapper
            ul
                li.link
                    router-link(to="/") 
                        | Start
                li.link
                    router-link(to="/oferta")
                        | Oferta
                li.link
                    router-link(to="/onas")
                        | O Firmie
                li.link
                    router-link(to="/kalkulator")
                        | Kalkulator
                li.link
                    router-link(to="/kontakt")
                        | Kontakt
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            menuShowed: false,
            menuTimeout: ''
        }
    },
    methods: {
        toggleMenu() {
            clearInterval(this.menuTimeout);
            
            // toggle buttons
            
            const button = document.querySelector('.menu-changer');
            
            button.style.animation = 'disappear .3s forwards ease-in-out';
            this.menuTimeout = setTimeout(() => {
                (this.menuShowed === false) ? this.menuShowed = true : this.menuShowed = false;
                const b = document.querySelector('.menu-changer');
                b.style.animation = 'appear .3s ease-in-out forwards';
                b.style.color = '$lightCyan';
            }, 300);

            // toggle menu

            const menu = document.querySelector('.navbar-wrapper');
            menu.style.display = 'flex';
            setTimeout(() => {
                (this.menuShowed === false) ? menu.style.animation = 'showMenu .5s ease-in-out both' : menu.style.animation = 'hideMenu .5s ease-in-out both';
                const links = document.querySelectorAll('.link');
                if (this.menuShowed === false) {
                    links.forEach((el,index) => {
                        el.style.animation = `showLink .3s ${0.3+0.05*index}s both ease-in-out`;
                    });
                } else {
                    links.forEach((el,index) => {
                        el.style.animation = '';
                    });
                }
            }, 10);
        }
    }
}
</script>
<style lang="scss">

    $darkCyan: #186a6b;
    $lightCyan: #249fa1;

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
        top: 0;
        left: 0;
        min-height: 60px;
        
        i {
            font-size: 2.5em;
            color: $lightCyan;
            position: absolute;
            top: 15px;
            right: 8%;
            opacity: 1;
            z-index: 100;

            transition: all .3s ease-in-out;

            &:hover {
                color: $lightCyan;
                cursor: pointer;
            }
        }

        .navbar-wrapper {
            height: 100vh;
            width: 100;

            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $darkCyan;
            display: none;
            transform: translateY(-1000px);

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

                    transition: all .3s ease-in-out;

                    a {
                        text-decoration: none;
                        color: #fff;
                        text-transform: uppercase;
                        font-size: 2em;
                    }

                    &:hover {
                        background-color: #fff;
                        cursor: pointer;

                        a {
                            color: $lightCyan;
                        }
                    }
                }
            }
        }
    }
</style>