'use strict';

/**
 * Logger
 *
 * Created By: fozzz
 * Created Date: 2024/6/25 下午3:01
 * Filename: logger.js
 */
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new transports.Console(),
    ],
});

module.exports = logger;