const express = require('express');

const router = express.Router();

const crypto = require('crypto');

const {addSignup} = require('../fsUtils');

router.post('/', async (req, res) => {
  const data = req.body;
  if(!data.email || !data.password || !data.firstName || ! data.phone) return res.status(401).json({message: 'Campos ausentes!'});
  const token = crypto.randomBytes(8).toString('hex');
  await addSignup(data, token);
  res.status(200).json({token: token})
});

module.exports = router;