const express = require('express');

const router = express.Router();

const {addActivity} = require('../fsUtils');

const checkAuthorization = require('../middleware/checkAuthorization');

const checkName = require('../middleware/checkName');

const checkPrice = require('../middleware/checkPrice');

const checkDescription = require('../middleware/checkDescription');

router.use(checkAuthorization);

router.use(checkName);

router.use(checkPrice);

router.use(checkDescription);


router.post('/', async (req, res) => {
  const body = req.body;
  await addActivity(body);
  res.status(201).json({message: 'Atividade cadastrada com sucesso!'});
});

module.exports = router;