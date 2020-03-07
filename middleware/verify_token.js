const jwt = require('jsonwebtoken');
require('dotenv').config();
const url = require('url');
const Permision_Table = require('../model/permision');
const Source = require('../constant/path')

module.exports.verifyToken = async (req, res, next) => {
    try {
        const path_name = url.parse(req.url).pathname;
        let admin_login_pattern = new RegExp('/admin/login');
        let user_login_pattern = new RegExp('/user/login');
        console.log(user_login_pattern);
        if (admin_login_pattern.test(path_name) || user_login_pattern.test(path_name))
            next();
        else {
            const bearerHeader = req.headers['authorization'];
            if (bearerHeader) {
                const bearer = bearerHeader.split(' ');
                const token = bearer[1];
                req.token = token;

                jwt.verify(req.token, process.env.Secret_Key, (error, payload) => {
                    if (error)
                        throw new Error('unauthenticated...!!');
                });
            } else
                res.sendStatus(403);

            const payLoad = jwt.decode(req.token);
            if (payLoad.type == 'admin')
                next();
            else if (payLoad.type == 'user') {
                const action_http = req.method;
                console.log(action_http);

                //check can put post get delete
                const isAccess = await Permision_Table.findOne({
                    attributes: [action_http],
                    where: {
                        type_user: payLoad.type
                    },
                    raw: true
                });
                console.log('text', isAccess[action_http]);
                if (isAccess[action_http] == 0) {
                    throw new Error('you can not access');
                } else {
                    //check can access resouce
                    let count = 0;
                    let array = Source.path_user[action_http];
                    console.log('path_array:' + array);
                    for (i = 0; i < array.length; i++) {
                        let pattern = RegExp(array[i]);
                        if (pattern.test(path_name))
                            count++;
                    }
                    if (count >= 1)
                        next();
                    else
                        throw new Error('you can not access to resouce');
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};