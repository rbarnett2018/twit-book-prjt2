const express = require('express');
const router = express.Router();

const homeController = require('../controller/home');

router.get('/', home.profile_list);

module.exports = router;