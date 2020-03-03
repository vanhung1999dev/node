const Express = require('express');
const router = Express.Router();
const User_Controller = require('../controller/userController');
const verify = require('../middleware/verify_token');
const check = require('../middleware/check_permision');

router.post('/login', User_Controller.login);
router.post('/insert', verify.verifyToken, check.check_permison, User_Controller.createUser);
router.get('/id/:id', verify.verifyToken, check.check_permison, User_Controller.getUser);
router.put('/update/name/:name', verify.verifyToken, check.check_permison, User_Controller.updateUser);
router.delete('/delete/id?id=1', verify.verifyToken, check.check_permison, User_Controller.deleteUser);

router.post('/insert/book', verify.verifyToken, check.check_permison, User_Controller.createBook);
router.get('/get/book/:id', verify.verifyToken, check.check_permison, User_Controller.getBook);
router.get('/getAll/book', verify.verifyToken, check.check_permison, User_Controller.getBooks);

module.exports = router;
