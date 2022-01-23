const express = require('express');
const router = express.Router();

const createController = require('../controller/create-form');

router.get('/', createController.profile_create_get);
router.post('/', createController.profile_create_post);


module.exports = router;