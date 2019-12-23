const app = require('../config/app');
const router = require('./routes');
const helpers = require('./helpers');

// routes
app.use('/', router());

// static files 
app.use(app.get('static'));

// register helpers
Object.keys(helpers).forEach(h => {
    eval(`app.locals.${h} = helpers[h]`);
});

// start server
app.listen(app.get('port'));