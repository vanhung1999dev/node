const Sequelize = require('sequelize');
const connect = new Sequelize('admin_user','root','vanhung1999',{
  host: 'localhost',
  dialect: 'mysql'
});

const checkConnect = async () => { await connect.authenticated()};
if(checkConnect)
console.log('connect successfull!!');

module.exports = connect;