import axios from './axios';

export function zhuce(account, password) {
    axios.post('/user/add', {
        account,
        password
    }).then(result => {
        if (result.code == 0) {
            return Promise.resolve(result)
        }
        return Promise.reject(result.codeText)
    })
}
export function denglu(account, password) {
    axios.post('/user/login', {
        account,
        password
    }).then(result => {
        if (result.code == 0) {
            return Promise.resolve(result)
        }
        return Promise.reject(result.codeText)
    })
}
