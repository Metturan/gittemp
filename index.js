const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const keys = require('./config/keys');

app.use(bodyParser.json());

require('./routes/formRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 4000;

app.listen(PORT);