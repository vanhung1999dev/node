const User_Table = require('../model/normal_user');
const Book_Table = require('../model/book');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

module.exports.createBook = async (req, res) => {
    try {
        let book = await Book_Table.create({
            name: 'bi quyet lam giau',
            author: 'Tony',
            totalPage: 100
        });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.getBook = async (req, res) => {
    try {
        let id_book = req.params.id;
        let book = await Book_Table.findOne({
            where: {
                id: id_book
            }
        });
        res.send(book);
    } catch (error) {
        console.log(error);
    }
};

module.exports.getBooks = async (req, res) => {
    try {
        let books = await Book_Table.findAll();
        res.send(books);
    } catch (error) {
        console.log(error);
    }
};

module.exports.updateBook = async (req,res) => {
    try {
        const name_book = req.params;
        const result = await Book_Table.update({name: name_book},{
            where: {
                id: 2
            }
        });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports.deleteBook = async (req,res) => {
    try {
        const reuslt = await Book_Table.destroy({
            where: {
                id: 3
            }
        });
        res.sendStatus(200).send(reuslt);
    } catch (error) {
        console.log(error);
    }
};
