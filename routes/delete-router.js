const express = require('express');
const router = express.Router();

const deleteController = require('../controller/delete-names');

router.get('/', delete-names.profile_delete_get);
router.get('/:name', delete-names.profile_delete_post);
router.delete('/:name', delete-names.profile_delete_popup);



module.exports = router;