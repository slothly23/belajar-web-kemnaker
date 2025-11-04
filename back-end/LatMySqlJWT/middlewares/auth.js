const jwt = require('jsonwebtoken');
require('dotenv').config(); // load env untuk akses JWT_SECRET

const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    throw new Error('JWT_SECRET belum di set di .env')
}

// buat middleware
// jika ada aksi create, update, delete harus melalui authentification dulu

// token didapat saat sudah login
module.exports = function auth(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        // req.headers('authorization') => case sensitive, harus tulis pake huruf kecil semua
        if (!authHeader) {
            return res.status(401).json({ message: 'No token provide'})
        }

        const parts = authHeader.split(' ');
        if(parts.length !== 2 || parts[0] !== 'Bearer'){
            return res.status(401).json({ message: 'invald authorization'})
        }

        const token = parts[1];

        // verivikasi token
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) { // if
                return res.status(401).json({ message: 'invalid token'});
            }
            req.user = {id: decoded.id, email: decoded.email}; // else
            next();
        })
    } catch (error) {
        next(error);
    }
}