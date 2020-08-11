const userCtrl = require('../controllers/user');

module.exports = function (app, router) {


    router.post('/register', userCtrl.register);

    router.get('/getuser', userCtrl.getUser)

    router.put('/updateuser', userCtrl.updateUser);

    router.delete('/deleteuser', userCtrl.deleteUser);

    app.use('/', router);
}