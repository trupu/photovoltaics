import LandingPage from '../template/LandingPage.vue';
import Offer from '../template/Offer.vue';
import Contact from '../template/Contact.vue';

export default [
    {
        path: '/', component: LandingPage
    },
    {
        path: '/oferta', component: Offer
    },
    {
        path: '/kontakt', component: Contact
    },
    {
        path: '*', component: LandingPage
    }
]
