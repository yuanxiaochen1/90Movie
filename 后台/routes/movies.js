const express = require('express'),
    route = express.Router();
const {
    writeFile
} = require('../utils/promiseFS');
const {
    success
} = require('../utils/tools');
//查看电影列表
route.get('/list', (req, res) => {
    let $moviesDATA = req.$moviesDATA,
        $newMoviesDATA = req.$newMoviesDATA;
    if (req.session.userID) {
        //登陆
        let $myMoviesDATA = req.$myMoviesDATA;
        //获得登陆账户的收藏信息
        data = $myMoviesDATA.find(item => {
            return item.userId == req.session.userID
        })
        //合并
        data.loveMovies.forEach(item => {
            let a = $moviesDATA.find(item1 => item1.movieId == item.movieId);
            if (a) {
                item.loveState == 1 ? a.loveNum += 1 : null;
                a.loveState = item.loveState;
                a.wantSee = item.wantSee;
                a.seeDown = item.seeDown;
                return;
            }
            let c = $newMoviesDATA.find(item1 => item1.movieId == item.movieId);
            $moviesDATA.push({
                ...c,
                movieId: $moviesDATA.length + 1
            })
        })

    }
    res.send(success(true, {
        data: $moviesDATA
    }));
})
//=>增加喜爱的电影信息
route.post('/addLove', (req, res) => {
    let $myMoviesDATA = req.$myMoviesDATA,
        flag = false;
    let {
        movieId,
        title
    } = req.body;
    $myMoviesDATA.forEach((item, index) => {
        //存在此用户信息
        if (item.userId == req.session.userID) {
            let a = false;
            //如果有这个电影直接修改loveState的值
            item.loveMovies.map(item => {
                if (item.movieId == movieId) {
                    item.loveState = 1;
                    a = true;
                    return item;
                }
                return item;
            })
            //如果没有则添加赐个电影
            if (!a) {
                item.loveMovies.push({
                    movieId,
                    title,
                    "loveState": 1,
                    "wantSee": 0,
                    "seeDown": 0
                })
            }
            flag = true;
        }
    })
    //不存在此用户信息
    if (!flag) {
        $myMoviesDATA.push({
            "userId": req.session.userID,
            "loveMovies": [{
                movieId,
                title,
                "loveState": 1,
                "wantSee": 0,
                "seeDown": 0
            }]
        })
    }
    writeFile('./json/myMovies.json', $myMoviesDATA).then(() => {
        res.send(success(true));
    }).catch(() => {
        res.send(success(false));
    });
});
//=>增加想看的电影信息
route.post('/addWantSee', (req, res) => {
    let $myMoviesDATA = req.$myMoviesDATA,
        flag = false;
    let {
        movieId,
        title
    } = req.body;
    $myMoviesDATA.forEach((item, index) => {
        //存在此用户信息
        if (item.userId == req.session.userID) {
            let a = false;
            //如果有这个电影直接修改loveState的值
            item.loveMovies.map(item => {
                if (item.movieId == movieId) {
                    item.wantSee = 1;
                    a = true;
                    return item;
                }
                return item;
            })
            //如果没有则添加赐个电影
            if (!a) {
                item.loveMovies.push({
                    movieId,
                    title,
                    "loveState": 0,
                    "wantSee": 1,
                    "seeDown": 0
                })
            }
            flag = true;
        }
    })
    //不存在此用户信息
    if (!flag) {
        $myMoviesDATA.push({
            "userId": req.session.userID,
            "loveMovies": [{
                movieId,
                title,
                "loveState": 0,
                "wantSee": 1,
                "seeDown": 0
            }]
        })
    }
    writeFile('./json/myMovies.json', $myMoviesDATA).then(() => {
        res.send(success(true));
    }).catch(() => {
        res.send(success(false));
    });
});
//=>增加已看的电影信息
route.post('/addSeeDown', (req, res) => {
    let $myMoviesDATA = req.$myMoviesDATA,
        flag = false;
    let {
        movieId,
        title
    } = req.body;
    $myMoviesDATA.forEach((item, index) => {
        //存在此用户信息
        if (item.userId == req.session.userID) {
            let a = false;
            //如果有这个电影直接修改loveState的值
            item.loveMovies.map(item => {
                if (item.movieId == movieId) {
                    item.seeDown = 1;
                    a = true;
                    return item;
                }
                return item;
            })
            //如果没有则添加赐个电影
            if (!a) {
                item.loveMovies.push({
                    movieId,
                    title,
                    "loveState": 0,
                    "wantSee": 0,
                    "seeDown": 1
                })
            }
            flag = true;
        }
    })
    //不存在此用户信息
    if (!flag) {
        $myMoviesDATA.push({
            "userId": req.session.userID,
            "loveMovies": [{
                movieId,
                title,
                "loveState": 0,
                "wantSee": 0,
                "seeDown": 1
            }]
        })
    }
    writeFile('./json/myMovies.json', $myMoviesDATA).then(() => {
        res.send(success(true));
    }).catch(() => {
        res.send(success(false));
    });
});

module.exports = route;