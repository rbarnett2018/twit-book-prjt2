const express = require('express');
const router = express.Router();
const viewController = require('../controller/view-names');


router.get('/', viewController.profile_list);
router.get('/:name', viewController.profile_enlarged);

module.exports = router;