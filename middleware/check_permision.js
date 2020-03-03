const Permision_Table = require('../model/permision');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const Source = require('../config/path');
const url = require('url');

module.exports.check_permison = async function (req, res, next) {
    const payLoad = jwt.decode(req.token);
    if (payLoad.type == 'admin')
        next();
    else if (payLoad.type == 'user') {
        try {
            const action_http = req.method;
            const path_name = url.parse(req.url).pathname;
            console.log(action_http);
            console.log(path_name);

            //check can put post get delete
            const isAccess = await Permision_Table.findOne({
                attributes: [action_http],
                where: {
                    type_user: payLoad.type
                }
            });
            console.log(isAccess.dataValues[action_http]);// ??
            if (isAccess.dataValues[action_http] == 0) {
                throw new Error('you can not access');
            } else {
                //check can access resouce
                let count = 0;
                let array = Source.path_user[action_http];
                console.log('path_array:' + array);
                for (i = 0; i < array.length; i++) {
                    console.log(array[i]);
                    let pattern = RegExp(array[i]);
                    console.log('pattern:' + pattern);
                    console.log(pattern.test(path_name));
                    if (pattern.test(path_name))
                        count++;
                }
                if (count >= 1)
                    next();
                else
                    throw new Error('you can not access to resouce');
            }
        } catch (error) {
            console.log(error);
        }
    }
};