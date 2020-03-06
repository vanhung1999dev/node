const Express = require('express');
const router = Express.Router();
const admin_controller = require('../controller/adminController');
const Login = require('../middleware/login');

router.post('/login', Login.admin_login);
router.post('/insert', admin_controller.createAdmin);
router.get('/id/:id', admin_controller.getAdmin);
router.get('/getAll', admin_controller.getAllAdmin);
router.put('/age/:age', admin_controller.updateAdmin);
router.put('/delete/:id', admin_controller.deleteAdmin);

router.post('/insert/book', admin_controller.createBook);
router.get('/get/book/:id', admin_controller.getBook);
router.get('/getAll/books', admin_controller.getBooks);
router.put('/update/book/name/:name', admin_controller.updateBook);
router.delete('/delete/book/:id', admin_controller.deleteBook);

module.exports = router;