import Vue from 'vue'
import Vuex from 'vuex'
import {
    movieList
} from "../api/index";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        movies: []
    },
    mutations: {
        change(state, data) {
            state.movies = data
        }
    },
    actions: {
        change(context) {
            movieList()
                .then(result => {
                    if (result.code == 0) {
                        context.commit('change', result.data)
                        return;
                    }
                    return Promise.reject(result.codeText);
                })
                .catch(sea => {
                    console.log(sea);
                });
        }
    },
    modules: {}
})