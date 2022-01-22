const express = require('express');
const router = express.Router();
const updateController = require('../controller/update-form');

router.get('/', update-form.profile_update_get_names);
router.get('/:name', update-form.profile_detail);
router.put('/:name', update-form.profile_update_put);



module.exports = router;