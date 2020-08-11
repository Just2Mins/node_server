const teacherCtrl = require('../controllers/teacher');
const authToken = require('../middleware/auth');


module.exports = function (app, router) {


  router.post('/registerteacher', teacherCtrl.register);

  router.post('/login', teacherCtrl.login)

  router.get('/getuser/:name', authToken.verifyToken, teacherCtrl.getUser);

  router.get('/getallusers', authToken.verifyToken, teacherCtrl.getAllUser)


  app.use('/', router);
}