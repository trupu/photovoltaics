import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        header: {
            renderPath: false,
            title: '',
            subtitle: '',
            description: '',
            path: ''
        }
    },
    mutations: {
        changeTitle(state, payload) {
            state.header.renderPath = true;
            state.header.title = payload[0];
            state.header.subtitle = payload[1];
            state.header.description = payload[2];
            state.header.path = payload[3].split('/')[1];
        }
    }
})
