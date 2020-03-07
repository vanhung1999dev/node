const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const Verify = require('./middleware/verify_token');
const cookieParser = require('cookie-parser')

app.use(Verify.verifyToken);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/admin', require('./router/router_admin'));
app.use('/user', require('./router/router_user'));

app.listen(3000);