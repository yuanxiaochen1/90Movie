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
        $newMoviesDATA.forEach(item=>{
            $moviesDATA.push({
                ...item,
                movieId:$moviesDATA.length+1
            })
        })
    if (req.session.userID) {
        //登陆
        let $myMoviesDATA = req.$myMoviesDATA;
        //获得登陆账户的收藏信息
        data = $myMoviesDATA.find(item => {
            return item.userId == req.session.userID
        })
        //合并
        if (data) {
            data.loveMovies.forEach(item => {
                let a = $moviesDATA.find(item1 => item1.movieId == item.movieId);
                if (a) {
                    item.loveState == 1 ? a.loveNum += 1 : null;
                    a.loveState = item.loveState;
                    a.wantSee = item.wantSee;
                    a.seeDown = item.seeDown;
                    return;
                }
            })
        }else{
            writeFile('./json/myMovies.json', [
                ...req.$myMoviesDATA,{"userId": req.session.userID,"loveMovies": []}])
        }
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
                    item.seeDown = 0;
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
                    item.wantSee = 0;
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
//删除喜爱的电影信息
route.post('/deleteLove', (req, res) => {
    let $myMoviesDATA = req.$myMoviesDATA;
    let {
        movieId,
        type = 'love'
    } = req.body;
    let data = $myMoviesDATA.find(item => item.userId == req.session.userID);
    data.loveMovies.map(item => {
        if (item.movieId == movieId) {
            if (type == 'love') {
                item.loveState = 0;
            } else if (type == 'wantSee') {
                item.wantSee = 0;
            } else if (type == 'seeDown') {
                item.seeDown = 0;
            }
        }
        if (item.loveState == 0 && item.wantSee == 0 && item.seeDown == 0) {
            return {}
        }
        return item;
    })
    writeFile('./json/myMovies.json', $myMoviesDATA).then(() => {
        res.send(success(true));
    }).catch(() => {
        res.send(success(false));
    });
});
//查看新上映和待映的电影列表
route.get('/newMoviesList', (req, res) => {
    let $newMoviesDATA = req.$newMoviesDATA;
    res.send(success(true, {
        data: $newMoviesDATA
    }));
})
module.exports = route;