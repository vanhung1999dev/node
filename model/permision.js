const connect = require('../config/connect');
const Sequelize = require('sequelize');


const Permision_Table = connect.define('permision', {
    type_user: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    POST: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValule: 0
    },
    GET: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValule: 0
    },
    UPDATE: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValule: 0
    },
    DELETE: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValule: 0
    }
},{
    timestamps: false,
    nameTable: 'Permision'
});

module.exports = Permision_Table;