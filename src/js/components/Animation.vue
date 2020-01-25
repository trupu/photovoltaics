<template lang='pug'>
    section#animation
</template>
<script>
export default {
    name: 'Animation',
    data() {
        return {
            scrollEvent: '',
            scrollTimeout: [],
            firstlySeen: []
        }
    },
    methods: {
        // animation mechanics
        animationOnshow(el, name) {
            if (window.scrollY >= (el.offsetTop-screen.height) && window.scrollY <= (el.offsetTop+el.offsetHeight)) {
                el.style.animation = name;
            } else {
                el.style.animation = '';
            }
        },
        // animation wrapper
        animationSet() {
            const left = document.querySelectorAll('.animation-onshow_left');
            if (left) left.forEach((el, index) => this.animationScrollController({el, index}, 'onshow_left 1s ease-in-out both'));

            const right = document.querySelectorAll('.animation-onshow_right');
            if (right) right.forEach((el, index) => this.animationScrollController({el, index: index+10}, 'onshow_right 1s ease-in-out both'));

            const popup = document.querySelectorAll('.animation-onshow_popup');
            if (popup) popup.forEach((el, index) => this.animationScrollController({el, index: index+20}, 'onshow_popup 1s ease-in-out both'));
        },
        // trigger animation
        animationScrollController(obj, name) {
            if (this.firstlySeen[obj.index] !== true) {
                this.animationOnshow(obj.el, name);
                this.firstlySeen[obj.index] = true;
            }
            
            const t = this;
            this.scrollEvent = window.addEventListener('scroll', function() {
                clearTimeout(t.scrollTimeout[obj.index]);
                t.scrollTimeout[obj.index] = setTimeout(() => {
                    t.animationOnshow(obj.el, name);
                }, 50);
            });
            
        }
    },
    mounted() {
        setTimeout(() => {
            this.animationSet();
        }, 50);
    }
}
</script>
<style lang="scss">

@keyframes onshow_left {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes onshow_right {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes onshow_popup {
    0% {
        opacity: 0;
        transform: scale(0.2);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

    .animation-onshow_left {
        // animation: onshow_left 1s ease-in-out both;
        height: auto;
    }

    .animation-onshow_right {
        // animation: onshow_right 1s ease-in-out both;
        height: auto;
    }

    .animation-onshow_popup {
        // animation: onshow_popup 1s ease-in-out both;
        height: auto;
    }

    .animation-hide {
        opacity: 0;
    }

</style>
