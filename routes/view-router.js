const express = require('express');
const router = express.Router();
const viewController = require('../controller/view-names');


router.get('/', view-names.profile_list);
router.get('/:name', view-names.profile_enlarged);

module.exports = router;