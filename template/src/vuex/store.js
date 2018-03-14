import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: false,
    state: {
        count: 2
    },
    mutations: {
        increment: (state) => {
            const obj = state
            obj.count += 1
        },
        decrement: (state) => {
            const obj = state
            obj.count -= 1
        }
    }
});

export default store;