const Express = require('express');
const router = Express.Router();
const admin_controller = require('../controller/adminController');
const verify = require('../middleware/verify_token');
const check = require('../middleware/check_permision');

router.post('/login', admin_controller.login);
router.post('/insert', verify.verifyToken, check.check_permison, admin_controller.createAdmin);
router.get('/id/:id', verify.verifyToken, check.check_permison, admin_controller.getAdmin);
router.get('/getAll', verify.verifyToken, check.check_permison, admin_controller.getAllAdmin);
router.put('/age/:age', verify.verifyToken, check.check_permison, admin_controller.updateAdmin);
router.put('/delete/:id', verify.verifyToken, check.check_permison, admin_controller.deleteAdmin);

module.exports = router;