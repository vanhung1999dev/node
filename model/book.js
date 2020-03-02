const connect = require('../config/connect');
const Sequelize = require('sequelize');

const Book_Table = connect.define('Book',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    totalPage: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
    nameTable: 'Book'
});


module.exports = Book_Table;