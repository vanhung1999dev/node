const connect = require('../config/connect');
const Sequelize = require('sequelize');
const Normal_User_Table = connect.define('Normal_User',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER
    },
    homeTown: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    type_user: {
        type: Sequelize.STRING,
        defaultValue: 'user'
    }
},{  
    timestamps: false,
        nameTable: 'normal_user'
});

module.exports = Normal_User_Table;