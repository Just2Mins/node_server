const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();

/* DB connection */
mongoose.connect('mongodb://localhost:27017/college', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

/* Predefined middleware function */
/* to parse the req.body data (data which are coming from the user) */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* user defined middleware funciton */
/* app.use(function(req,res,next){
  

  next();
})
 */

/* app.get('/', function (req, res) {

}) */


/* router.post('/register', async function (req, res) {
  const userData = await User.create(req.body);
  res.send(userData);
}) */

/* 
app.use(router)
 */
/* Middleware */
/* app.use() */

/* Routes */
require('./routes/userRoutes')(app, router)
require('./routes/teacherRoutes')(app, router)

module.exports = app;
