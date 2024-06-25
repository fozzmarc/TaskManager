'use strict';

/**
 * App Entrypoint
 *
 * Created By: fozzz
 * Created Date: 2024/6/25 下午2:57
 * Filename: server.js
 */
const express = require('express');
const morgan = require('morgan');
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const logger = require('./utils/logger');
const sequelize = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Sync Database and Start the Server
sequelize.sync()
    .then(() => {
        logger.info('Connected to MySQL');
        app.listen(config.port, () => {
            logger.info(`Server is running on port ${config.port}`);
        });
    })
    .catch(err => logger.error('Failed to connect to MySQL', err));