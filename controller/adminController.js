const Admin_Table = require('../model/admin');
const Book_Table = require('../model/book');
const permision = require('../model/permision');
const user = require('../model/normal_user');
const sequelize = require('sequelize');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

module.exports.createBook = async (req,res) => {
    try {
        const book = await Book_Table.create({
            name: 'nguoi gia kim',
            author: 'vanhung',
            totalPage: 200
        });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.getBook = async (req,res) => {
    try {
        const id_book = req.params.id;
        const book = await Book_Table.findOne({
            where: {
                id: id_book
            }
        });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.getBooks = async (req,res) => {
    try {
        const boooks = await Book_Table.findAll();
        res.send(boooks);
    } catch (error) {
        console.log(error);
    }
};

module.exports.updateBook = async (req,res) => {
    try {
        const name_book = req.params.name;
        const result = await Book_Table.update({name: name_book},{
            where: {
                id: 1
            }
        });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports.deleteBook = async (req,res) => {
    try {
        const id_book = req.params.id;
        const result = await Book_Table.destroy({
            where: {
                id: id_book
            }
        });
        res.sendStatus(200).send(result);
    } catch (error) {
        console.log(error);
    }
};