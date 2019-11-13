import axios from './axios';

export function zhuce(name,account, password,phone) {
    return axios.post('/user/add', {
        name,
        account,
        password,
        phone
    })
}
export function yanzheng() {
    return axios.get('/user/login')
}
export function zcyanzheng(account,phone) {
    return axios.post('/user/test',{
        account,phone
    })
}
export function tuichu() {
    return axios.get('/user/signout')
}
export function denglu(account, password) {
    return axios.post('/user/login', {
        account,
        password
    })
}
export function xiugai( password) {
    return axios.post('/user/update', {
        password
    })
}
export function movieList(){
    return axios.get('/movies/list')
}
export function newMoviesList(){
    return axios.get('/movies/newMoviesList')
}
export function addLoveMvie(movieId, title) {
    return axios.post('/movies/addLove', {
        movieId,
        title
    })
}
export function deleteMovies(movieId, type) {
    return axios.post('/movies/deleteLove', {
        type,
        movieId
    })
}
export function addwangSee(movieId, title) {
    return axios.post('/movies/addWantSee', {
        movieId,
        title
    })
}
export function addseeDown(movieId, title) {
    return axios.post('/movies/addSeeDown', {
        movieId,
        title
    })
}
export function cardsList(){
    return axios.get('/cards/list')
}

export function addloveCard(cardId, title) {
    return axios.post('/cards/addLove', {
        cardId,
        title
    })
}
export function deleteCards(cardId) {
    return axios.post('/cards/deleteLove', {
        cardId
    })
}
