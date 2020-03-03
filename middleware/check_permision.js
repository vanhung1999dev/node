const Permision_Table = require('../model/permision');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const Path = require('../config/path');
const url = require('url');

module.exports.check_permison = async function (req, res, next) {
    const payLoad = jwt.decode(req.token);
    if (payLoad.type == 'admin')
        next();
    else if (payLoad.type == 'user') {
        try {
            const action_http = req.method;
            const url_path = req.url;
            const path = url_path.pathname;
            console.log(action_http);
            console.log(url_path);

            //check can put post get delete
            const isAccess = await Permision_Table.findOne({
                attributes: [action_http],
                where: {
                    type_user: 'normal_user'
                }
            });
            console.log(isAccess.dataValues[action_http]);// ??
            if (isAccess.dataValues[action_http] == 0) {
                throw new Error('you can not access');
            } else {

                //check can access resouce
                let count = 0;
                let path_array = Path.path_user[action_http];
                console.log('path_array:' + path_array);
                for (i = 0; i < path_array.length; i++) {
                    console.log(path_array[i]);
                    let pattern = RegExp(path_array[i]);
                    console.log('pattern:' + pattern);
                    console.log(pattern.test(url_path));
                    if (pattern.test(url_path))
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