const fs = require('fs').promises;

const path = require('path');

const signupPath = path.resolve(__dirname, '../../signup.json');

const checkAuthorization = async (req, res, next) => {
  const signups = await fs.readFile(signupPath, 'utf-8');
  const {authorization} = req.body;
  const check = JSON.parse(signups).some((item) => item.token === authorization);
  if (!authorization || authorization.length !== 16 || !check) return res.status(401).json({message: 'Token inválido!'});
  next();
};

module.exports = checkAuthorization;