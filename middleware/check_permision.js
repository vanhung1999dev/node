const Permision_Table = require('../model/permision');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const Path = require('../config/path');

module.exports.check_permison = async function(req, res, next){
    const payLoad = jwt.decode(req.token);
    if (payLoad.type == 'admin')
        next();
    else if (payLoad.type == 'normal_user') {
        const action_http = req.method();
        const url_path = req.url.pathname;
        console.log(url_path);

        //check can put post get delete
        const isAccess = await Permision_Table.findOne({
            attributes:[action_http],
            where: {
                type_user: 'normal_user'
            }
        });
        if(isAccess == 0){
            throw new Error('you can not access');
        }else if (isAccess == 1){  
            
            //check can access resouce
            let count = 0;
            let path_array = Path.path_user[action_http];
            console.log(path_array);
            for(i=0; i < path_array.lenght; i++){
                for(path in path_array[i])
                    if(path == url_path)
                        count++;
            }
            if(count == 1)
                next();
            else
                throw new Error('you can not access to resouce');
        }
    }
};