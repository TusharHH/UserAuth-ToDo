const express = require('express');
const { signup } = require('../Controllers/user.js');
const { asyncHandler } = require('../Utils/asyncHandler.js');

const router = express.Router();

router.post('/signup', asyncHandler(signup));

module.exports = router;
