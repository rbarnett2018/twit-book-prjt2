const express = require('express');
const router = express.Router();

const createController = require('../controller/create-form');

router.get('/', create-form.profile_create_get);
router.post('/', create-form.profile_create_post);


module.exports = router;