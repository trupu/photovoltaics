import LandingPage from '../template/LandingPage.vue';
import Offer from '../template/Offer.vue';

export default [
    {
        path: '/', component: LandingPage
    },
    {
        path: '/oferta', component: Offer
    },
    {
        path: '*', component: LandingPage
    }
]
