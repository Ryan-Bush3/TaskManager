const mongoose = require('mongoose');
const Joi = require('joi');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    task: { type: String, required: true, maxlength: 25 },
    additionalInfo: { type: String, maxlength: 250 },
    category: { type: String, minlength: 3, required: true },
    tags: {
        type: Array,
        isAsync: true,
        validator: function(v){
            const result = v && v.length > 0;
            callback(result);
        },
        message: 'There needs to be at least one tag'
    },
    severity: {
        type: String,
        enum: ['Normal', 'Important', 'Very Important']
    },
    completed: { required: true, type: Boolean }
});

const Task = mongoose.model('Task', taskSchema);

function validateTask(task){
    const schema = {
        title: Joi.string().required(),
        task: Joi.string().max(25).required(),
        additionalInfo: Joi.string().max(250),
        category: Joi.string().min(3).required(),
        tags: Joi.array(),
        severity: Joi.string(),
        completed: Joi.boolean().required()
    };
    return Joi.validateTask(task, schema); 
}

module.exports.Task = Task;
module.exports.validate = validateTask;