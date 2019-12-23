const express = require('express');
const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');

const router = express.Router();
router.use(authController.isLogin);
router.get('/', viewController.getOverview);
router.get('/login', viewController.login);
router.get('/tour', viewController.getTour);
router.get('/tour/:slug', viewController.getTourDetails);

module.exports = router;
