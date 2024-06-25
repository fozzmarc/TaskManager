'use strict';

/**
 * User Router
 *
 * Created By: fozzz
 * Created Date: 2024/6/25 下午3:00
 * Filename: userRoutes.js
 */
const express = require('express');
const { register, login, getUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getUser);

module.exports = router;