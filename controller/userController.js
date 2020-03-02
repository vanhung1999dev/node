const User_Table = require('../model/normal_user');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.login = async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await User_Table.findOne({
            where: {
                [Op.and]: [
                    name, password
                ]
            }
        });
        if (user) {
            const token = jwt.sign({ type: user.type_user }, process.env.Secret_Key);
            res.send(token);
        } else
            throw new Error('username or password is not corrrect!!!');
    } catch (error) {
        console.log(error);
    }
};

module.exports.createUser = async (req, res) => {
    try {
        const user = await User_Table.create({
            name: 'vantung',
            age: '10',
            homeTown: 'thu duc',
            password: '456'
        });
        res.send(user);
    } catch (error) {
        console.log(error);
    }
};

module.exports.getUser = async (req, res) => {
    try {
        const id_user = req.params.id;
        const user = await User_Table.findOne({
            where: {
                id: id_user
            }
        });
        res.send(user);
    } catch (error) {
        console.log(error);
    }
};

module.exports.updateUser = async (req, res) => {
    try {
        const name_book = req.params;
        const result = await User_Table.update({ name: name }, {
            where: {
                id: 1
            }
        });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports.deleteUser = async (req, res) => {
    try {
        const id_book = req.params;
        const result = await User_Table.destroy({
            where: {
                id: id_book
            }
        });
        res.sendStatus(200).send(result);
    } catch (error) {
        console.log(error);
    }
};