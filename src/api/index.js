import axios from './axios';

export function zhuce(account, password) {
    return axios.post('/user/add', {
        account,
        password
    })
}
export function denglu(account, password) {
    return axios.post('/user/login', {
        account,
        password
    })
}
