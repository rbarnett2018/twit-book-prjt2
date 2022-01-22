const express = require('express');
const router = express.Router();

const homeController = require('../controller/home');
const createController = require('../controller/create-form');
const deleteController = require('../controller/delete-names');
const updateController = require('../controller/update-form');
const viewController = require('../controller/view-names');

// HOME ROUTES
router.get('/', home.profile_list);

// CREATE ROUTES
router.get('/create', create-form.profile_create_get);
router.post('/create', create-form.profile_create_post);

// DELETE ROUTES
router.get('/delete', delete-names.profile_delete_get);
router.get('delete/:name', delete-names.profile_delete_post);
router.delete('/delete/:name', delete-names.profile_delete_popup);

// UPDATE ROUTES
router.get('/edit', update-form.profile_update_get_names);
router.get('/edit/:name', update-form.profile_detail);
router.put('/edit/:name', update-form.profile_update_put);

// VIEW ROUTES
router.get('/view', view-names.profile_list);
router.get('/view/:name', view-names.profile_enlarged);

module.exports = router;