'use strict';

/**
 * Task Model
 *
 * Created By: fozzz
 * Created Date: 2024/6/25 下午2:59
 * Filename: taskModel.js
 */
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('pending', 'in progress', 'completed'),
        defaultValue: 'pending'
    }
}, {
    timestamps: true
});

// Define relationship
Task.belongsTo(User, { foreignKey: 'userId' });

module.exports = Task;