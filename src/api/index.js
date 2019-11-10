import axios from './axios';

export function zhuce(account, password) {
    return axios.post('/user/add', {
        account,
        password
    })
}
export function yanzheng() {
    return axios.get('/user/login')
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
export function movieList(){
    return axios.get('/movies/list')
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
