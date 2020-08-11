const Teacher = require('../models/teacherModel');
const jwt = require('jsonwebtoken');


module.exports = {
    async register(req, res) {
        const teacherData = await Teacher.create(req.body);
        res.send(teacherData);
    },

    async login(req, res) {
        try {
            const user = await Teacher.findOne({ email: req.body.email, password: req.body.password })

            if (user) {

                const token = jwt.sign({ 'user': user }, 'vikas', { expiresIn: '1hr' })

                res.status(200).json({ message: 'Logged In', user, token })
            } else {
                res.status(404).json({ 'NotFound': 'your email or password are incorrect' });
            }
        } catch (err) {
            res.status(400).json({ 'Error': err });
        }


    },

    async getUser(req, res) {
        try {
            console.log('params ', req.params.name)
            const user = await Teacher.findOne({ teacherName: req.params.name });
            if (user) {
                res.status(200).json({ user: user })
            } else {
                res.status(404).json({ NotFound: 'User does not found' })
            }
        } catch (err) {
            res.status(400).json({ 'Error ': err })
        }


    },
    async getAllUser(req, res) {
        try {
            const user = await Teacher.find({});
            if (user) {
                res.status(200).json({ user: user })
            } else {
                res.status(404).json({ NotFound: 'User does not found' })
            }
        } catch (err) {
            res.status(400).json({ 'Error ': err })
        }


    }


}