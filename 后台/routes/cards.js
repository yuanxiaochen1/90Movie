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
        if (data) {
            $cardsDATA.map(item => {
                if (data.cards.some(item1 => item.cardId == item1.cardId)) {
                    let a = data.cards.find(item1 => item.cardId == item1.cardId);
                    item.loveState = a.loveState;
                    a.loveState == 1 ? item.loveNum += 1 : null;
                }
                return item;
            })
        } else {
            writeFile('./json/myCards.json', [
                ...req.$myCardsDATA, {
                    "userId": req.session.userID,
                    "cards": []
                }
            ])
        }
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
            let a = item.cards.find(item1 => item1.cardId==cardId)
            if (a) {
                item.cards.map(item1 => {
                    if (item1.cardId == cardId) {
                        item1.loveState=1
                    }
                    flag = true;
                    return item1;
                })
            } else {
                item.cards.push({
                    cardId,
                    title,
                    "loveState": 1
                })
                flag = true;
            }
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
//删除喜爱的卡片
route.post('/deleteLove', (req, res) => {
    let $myCardsDATA = req.$myCardsDATA;
    let {
        cardId,
    } = req.body;
    let data = $myCardsDATA.find(item => item.userId == req.session.userID);
    data.cards.map(item => {
        if (item.cardId == cardId) {
            item.loveState = 0
        }
        return item;
    })
    writeFile('./json/myCards.json', $myCardsDATA).then(() => {
        res.send(success(true));
    }).catch(() => {
        res.send(success(false));
    });
});
module.exports = route;