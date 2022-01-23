const express = require('express');
const router = express.Router();
const updateController = require('../controller/update-form');

router.get('/', updateController.profile_update_get_names);
router.get('/:name', updateController.profile_detail);
router.put('/:name', updateController.profile_update_put);



module.exports = router;