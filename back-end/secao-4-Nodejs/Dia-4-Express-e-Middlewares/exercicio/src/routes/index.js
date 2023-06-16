const express = require('express');

const router = express.Router();

const activitiesRouter = require('./activitiesRouter');

const signupRouter = require('./signupRouter');

router.use('/activities', activitiesRouter);

router.use('/signup', signupRouter);

module.exports = router;