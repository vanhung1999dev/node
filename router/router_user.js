const Express = require('express');
const router = Express.Router();
const User_Controller = require('../controller/userController');
const verify = require('../middleware/verify_token');
const Login = require('../middleware/login');

router.post('/login', Login.user_login);
router.post('/insert', User_Controller.createUser);
router.get('/id/:id', User_Controller.getUser);
router.put('/update/name/:name', User_Controller.updateUser);
router.delete('/delete/id?id=1', User_Controller.deleteUser);

router.post('/insert/book', User_Controller.createBook);
router.get('/get/book/:id', User_Controller.getBook);
router.get('/getAll/book', User_Controller.getBooks);
router.put('/update/:name', User_Controller.updateBook);
router.delete('/delete', User_Controller.deleteBook);

module.exports = router;
