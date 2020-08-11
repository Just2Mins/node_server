const User = require('../models/userModel');

module.exports = {
    async register(req, res) {
        const userData = await User.create(req.body);
        res.send(userData);
    },

    async getUser(req, res) {
        /*      const userData = await User.find({}); */
        const userData = await User.findOne({ name: 'Vikas' });
        /*    const userData = await User.findOne({ name: 'Shubham' }); */

        /*   const userData = await User.findOne({});   //fetches single document 
       
        const userData = await User.find({}); //fetches all the documents from the collection
         
        const userData = await User.find({ name: 'Shubham' }); */ // fetches the document based on the condition passed in the json object

        res.send(userData)
    },

    async updateUser(req, res) {
        const updatedUser = await User.update({ name: req.body.name }, {
            $set: {                 //pull, push
                name: 'ram'
            }
        })

        res.send(updatedUser);
    },

    async deleteUser(req, res) {

        try {
            const deleteUser = await User.deleteOne({ _id: '5f2c2c368da55fad74132bbe' });
            /*   res.send(deleteUser) */
            res.status(200).json({ 'deleteUser': deleteUser })
        } catch (err) {
            res.status(400).json({ 'Error ': err })
        }
    }


}