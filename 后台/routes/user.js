const express = require('express'),
    route = express.Router();
const {
    handleMD5,
    success,
} = require('../utils/tools');
const {
    writeFile
} = require('../utils/promiseFS');
//=>用户登录
route.post('/login', (req, res) => {
    let {
        account = '',
            password = ''
    } = req.body || {};
    password = handleMD5(password);
    const item = req.$userDATA.find(item => {
        return item.name === account && item.password === password;
    });

    if (item) {
        req.session.userID = parseFloat(item.id);
        res.send(success(true, {
            userId: item.id
        }));
        return;
    }
    res.send(success(false, {
        codeText: 'user name password mismatch!'
    }));
});
//=>检测是否登录
route.get('/login', (req, res) => {
    const userID = req.session.userID;
    if (userID) {
        res.send(success(true));
        return;
    }
    res.send(success(false, {
        codeText: 'current user is not logged in!'
    }));
});
//=>退出登录
route.get('/signout', (req, res) => {
    req.session.userID = null;
    res.send(success(true));
});
//=>增加用户信息
route.post('/add', (req, res) => {
    let {
        account,
        password
    } = req.body
    let $userDATA = req.$userDATA,
        passDATA = null;
    passDATA = {
        id: $userDATA.length === 0 ? 1 : (parseFloat($userDATA[$userDATA.length - 1]['id']) + 1),
        name: account,
        password: handleMD5(password),
    };
    $userDATA.push(passDATA);

    writeFile('./json/user.json', $userDATA).then(() => {
        res.send(success(true));
    }).catch(() => {
        res.send(success(false));
    });
});
//=>修改用户信息
route.post('/update', (req, res) => {
    let $userDATA = req.$userDATA,
        userId = req.session.userID,
        password = req.body.password,
        flag = false;
    if (!userId) {
        res.send(success(false, {
            condText: '未登录'
        }));
        return;
    }
    delete req.body.userId;
    $userDATA = $userDATA.map(item => {
        if (parseFloat(item.id) === parseFloat(userId)) {
            flag = true;
            let a = item.password = handleMD5(password);
            return a;
        }
        return item;
    });
    if (!flag) {
        res.send(success(false));
        return;
    }
    writeFile('./json/user.json', $userDATA).then(() => {
        res.send(success(true));
    }).catch(() => {
        res.send(success(false));
    });
});
module.exports = route;