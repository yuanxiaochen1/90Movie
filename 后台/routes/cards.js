const express = require('express'),
    route = express.Router();
const {
    writeFile
} = require('../utils/promiseFS');
const {
    success
} = require('../utils/tools');
//查看卡片列表
route.get('/list', (req, res) => {
    let $cardsDATA = req.$cardsDATA;
    if (req.session.userID) {
        //登陆
        let $myCardsDATA = req.$myCardsDATA;
        //获得登陆账户的收藏信息
        data = $myCardsDATA.find(item => {
            return item.userId == req.session.userID
        })
        //合并
        $cardsDATA.map(item=>{
            if(data.cards.some(item1=>item.cardId==item1.cardId)){
                item.loveState=1;
                item.loveNum+=1
            }

            return item;
        })

    }
    res.send(success(true, {
        data: $cardsDATA
    }));
})
//=>增加喜爱的卡片信息
route.post('/addLove', (req, res) => {
    let $myCardsDATA = req.$myCardsDATA,
        flag = false;
    let {
        cardId,
        title,
    } = req.body;
    $myCardsDATA.forEach((item, index) => {
        //存在此用户信息
        if (item.userId == req.session.userID) {
                item.cards.push({
                    cardId,
                    title,
                    "loveState": 1
                })
            flag = true;
        }
    })
    //不存在此用户信息
    if (!flag) {
        $myCardsDATA.push({
            "userId": req.session.userID,
            "loveMovies": [{
                cardId,
                title,
                "loveState": 1
            }]
        })
    }
    writeFile('./json/myCards.json', $myCardsDATA).then(() => {
        res.send(success(true));
    }).catch(() => {
        res.send(success(false));
    });
});
module.exports = route;