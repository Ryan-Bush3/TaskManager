const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    task: String,
    additionalInfo: String,
    category: String,
    tags: [Number],
    severity: String,
    completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports.Task = Task;