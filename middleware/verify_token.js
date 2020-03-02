const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.verifyToken = async function (req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        req.token = token;
        jwt.verify(req.token, process.env.Secret_Key, (error, payload) => {
            if (error)
                throw new Error('unauthenticated...!!');
        });
        next();
    } else
        res.sendStatus(403);
};