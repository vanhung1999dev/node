const connect = require('../config/connect');
const Sequelize = require('sequelize');
const Admin_Table = connect.define('Admin', {
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
        defaultValue: 'admin'
    }
},{
    timestamps: false,
    nameTable: 'admin'
});

module.exports = Admin_Table;