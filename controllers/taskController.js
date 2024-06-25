'use strict';

/**
 * Task Controller
 *
 * Created By: fozzz
 * Created Date: 2024/6/25 下午3:00
 * Filename: taskController.js
 */
const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = await Task.create({ title, description, userId: req.user.id });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { userId: req.user.id } });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;
        const task = await Task.findByPk(id);
        if (task.userId !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        task.title = title || task.title;
        task.description = description || task.description;
        task.status = status || task.status;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        if (task.userId !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        await task.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};