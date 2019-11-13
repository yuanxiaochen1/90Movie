import Vue from 'vue'
import Vuex from 'vuex'
import {
    movieList,
    cardsList,
    newMoviesList
} from "../api/index";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        movies: [],
        user:null,
        cards:[],
        newMovies:[]
    },
    mutations: {
        change(state, data) {
            state.movies = data
        },
        changeNewMovies(state, data) {
            state.newMovies = data
        },
        changeUser(state,user){
            state.user = user;
            console.log(user)
        },
        changeCards(state, data) {
            state.cards = data
        },
    },
    actions: {
        change(context) {
            movieList()
                .then(result => {
                    if (result.code == 0) {
                        context.commit('change', result.data)
                        return Promise.resolve();
                    }
                    return Promise.reject(result.codeText);
                })
                .catch(sea => {
                    console.log(sea);
                });
        },
        changeNewMovies(context) {
            newMoviesList()
                .then(result => {
                    if (result.code == 0) {
                        context.commit('changeNewMovies', result.data)
                        return Promise.resolve();
                    }
                    return Promise.reject(result.codeText);
                })
                .catch(sea => {
                    console.log(sea);
                });
        },
        changeUser(context,user){
            context.commit('changeUser', user)
        } ,
        changeCards(context) {
            cardsList()
                .then(result => {
                    if (result.code == 0) {
                        context.commit('changeCards', result.data)
                        return Promise.resolve();
                    }
                    return Promise.reject(result.codeText);
                })
                .catch(sea => {
                    console.log(sea);
                });
        },
    },
    modules: {}
})