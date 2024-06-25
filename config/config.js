'use strict';

/**
 * Config
 *
 * Created By: fozzz
 * Created Date: 2024/6/25 下午2:55
 * Filename: config.js
 */
require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'taskmanager',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
    },
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret'
};
