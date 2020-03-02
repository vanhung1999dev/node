const Admin_Table = require('../model/admin');
const Book = require('../model/book');
const permision = require('../model/permision');
const user = require('../model/normal_user');
const sequelize = require('sequelize');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.login = async (req, res) => {
    try {
        const { name, password } = req.body;
        let admin = await Admin_Table.findOne({
            where: {
                [Op.and]: [
                    name,
                    password
                ]
            }
        });
        if (admin) {
            const token = jwt.sign({ type: admin.type_user }, process.env.Secret_Key);
            res.send(token);
        } else
            res.send('invalid name or password');
    } catch (error) {
        console.log(error);
    }
};

module.exports.createAdmin = async (req, res) => {
    try {
        let admin = await Admin_Table.create({
            name: 'vanhung',
            age: 21,
            homeTown: 'bac ninh',
            password: '123'
        });
        res.send(admin);
    } catch (error) {
        console.log(error);
    }
};

module.exports.getAdmin = async (req, res) => {
    try {
        let id_admin = req.params.id;
        let admin = await Admin_Table.findOne({
            where: {
                id: id_admin
            }
        });
        res.send(admin);

        res.send(book, permision, user);

    } catch (error) {
        console.log(error);
    }
};

module.exports.getAllAdmin = async (req, res) => {
    try {
        let admins = await Admin_Table.findAll();
        res.send(admins);
    } catch (error) {
        console.log(error);
    }
};

module.exports.updateAdmin = async (req, res) => {
    try {
        let age = req.params.age;
        let result = await Admin_Table.update({ age: age }, {
            where: {
                age: 21
            }
        });
        res.send(age);
    } catch (error) {
        console.log(error);
    }
};

module.exports.deleteAdmin = async (req, res) => {
    try {
        const id_admin = req.params.id;
        const result = await Admin_Table.destroy({
            where: {
                id: id_admin
            }
        });
        res.status(200).send('delete done');
    } catch (error) {
        console.log(error);
    }
};