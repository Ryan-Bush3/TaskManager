const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const owner = require('../middleware/owner');
const { Task, validateTask } = require('../models/task');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.connect('mongodb://127.0.0.1:27017/task-manager')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect...', err));

// Create task
router.post('/', auth, (req, res) =>{
    async function createTask(){
        const task = await new Task({
            title: req.body.title,
            task: req.body.task,
            additionalInfo: req.body.additionalInfo,
            category: req.body.category,
            tags: req.body.tags,
            severity: req.body.severity,
            completed: false
        });
    
        const result = task.save();
        res.send(result);
    }
    createTask();
});

// Return one task
router.get('/:id', owner, (req, res) =>{
    async function getTask(){
        const result = await Task
        .findById({ _id: req.params.id });
        res.send(result);
    }
    getTask();
});

// Return all tasks
router.get('/', owner, (req, res) =>{
    async function allTasks(){
        const result = await Task.find();
        res.send(result);
    } 
    allTasks();
}); 

// Update a task
router.put('/:id', owner, (req, res) =>{
    async function updateTask(){
        const task = await Task.updateOne({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                task: req.body.task,
                additionalInfo: req.body.additionalInfo,
                category: req.body.category,
                severity: req.body.severity
            }
        });
        res.send(task);
    }
    updateTask();
});

// Delete task
router.delete('/:id', [auth, admin, owner], (req, res) =>{
    async function removeTask(){
        const remove = await Task.deleteOne({ _id: req.params.id });
        res.send(remove);
    }
    removeTask();
});

module.exports = router;
