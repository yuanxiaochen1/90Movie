const CONFIG = require('./config'),
	session = require('express-session'),
    bodyParser = require('body-parser');
/*-CREATE SERVER-*/
const express = require('express'),
	app = express();
app.listen(CONFIG.PORT, () => {
	console.log(`后台启动成功，端口号为：${CONFIG.PORT}`);
});
/*-MIDDLE WARE-*/
app.use((req, res, next) => {
	const {
		ALLOW_ORIGIN,
		CREDENTIALS,
		HEADERS,
		ALLOW_METHODS
	} = CONFIG.CROS;
	res.header("Access-Control-Allow-Origin", ALLOW_ORIGIN);
	res.header("Access-Control-Allow-Credentials", CREDENTIALS);
	res.header("Access-Control-Allow-Headers", HEADERS);
	res.header("Access-Control-Allow-Methods", ALLOW_METHODS);
	req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});
app.use(session(CONFIG.SESSION));
app.use(bodyParser.urlencoded({
	extended: false
}));
/*-QUERY DATA-*/
const {
	readFile
} = require('./utils/promiseFS');
app.use(async (req, res, next) => {
    req.$moviesDATA = JSON.parse(await readFile('./json/movies.json'));
    req.$newMoviesDATA = JSON.parse(await readFile('./json/newMovies.json'));
    req.$myMoviesDATA = JSON.parse(await readFile('./json/myMovies.json'));
    req.$myCardsDATA = JSON.parse(await readFile('./json/myCards.json'));
    req.$cardsDATA = JSON.parse(await readFile('./json/cards.json'));
    req.$userDATA = JSON.parse(await readFile('./json/user.json'));
	next();
});
/* ROUTE */
app.use('/user', require('./routes/user'));
app.use('/movies', require('./routes/movies'));
app.use('/cards', require('./routes/cards'));
app.use((req, res) => {
	res.status(404);
	res.send('NOT FOUND!');
});