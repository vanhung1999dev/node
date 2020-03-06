const Admin_Table = require('../model/admin');
const User_Table = require('../model/normal_user');
const {Op} = require('sequelize');


module.exports.admin_login = async (req, res) => {
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




module.exports.user_login = async (req, res) => {
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