const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
      
        if (!token) return res.status(403).json({ "Error": "Authorization Revoked" })

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!decoded) return res.status(403).json({ "Error": "Token Error" })

        next();
    } catch (error) {
        return res.status(403).json({ "Error": "Authorization Revoked " })
    }
} 