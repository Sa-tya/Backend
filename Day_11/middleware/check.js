const { emailValidate, passwordValidate } = require('../utils/validate')

const registerCheck = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;
    if (typeof email === 'string' &&
        typeof password === 'string' &&
        password === confirmPassword &&
        emailValidate(email) &&
        passwordValidate(password)
    ) {
        next();
    }
    else res.status(401).send('Initial check fails');
}
module.exports = registerCheck;