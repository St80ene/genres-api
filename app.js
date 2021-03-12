const express = require('express');
const logFn = require('./middleware/logger')
const authenticateFn = require('./middleware/authenticate');
const morgan = require('morgan');
const config = require('config');
const appStartUp = require('debug')('app:startup');
const genreModule = require('./routes/genres');
const home = require('./routes/home');

const app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());
app.use(express.static('public'));
app.use(logFn);
app.use(authenticateFn);
console.log(`app: ${app.get('env')}`);
console.log(app.get('env'));
app.set('view engine', 'pug');
app.use(genreModule);
app.use(home);

console.log(`Application name: ${config.get('name')}`);
console.log(`Application mail-server: ${config.get('mail.host')}`);


if (app.get('env') === 'development') {
	app.use(morgan('short'));
	appStartUp('Morgan in use...');
}


app.listen(3000, () => console.log('app listening on port 3000'));