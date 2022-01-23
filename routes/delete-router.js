const express = require('express');
const router = express.Router();

const deleteController = require('../controller/delete-names');

router.get('/', deleteController.profile_delete_get);
router.get('/:name', deleteController.profile_delete_post);
router.delete('/:name', deleteController.profile_delete_popup);



module.exports = router;