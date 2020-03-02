const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/admin', require('./router/router_admin'));
app.use('/user', require('./router/router_user'));

app.listen(3000);