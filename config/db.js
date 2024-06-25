'use strict';

/**
 * DB
 *
 * Created By: fozzz
 * Created Date: 2024/6/25 下午2:57
 * Filename: db.js
 */
const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
        host: config.db.host,
        dialect: config.db.dialect,
    }
);

module.exports = sequelize;