const jwt = require('jsonwebtoken')

module.exports = {
    verifyToken(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(404).json({ message: 'No Authorization' });
        }
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(400).json({ message: 'No token provided' });
        }


        return jwt.verify(token, 'vikas', function (err, decoded) {
            if (err) {
                if (err.expiredAt < new Date()) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        message: 'Token has expired. Please login again',
                        token: null
                    });
                }
                next();
            }
            req.user = decoded.data;
            next();

        });



    }
}
