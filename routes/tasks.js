const express = require('express');
const router = express.Router();


let tasks = [];

// Add task
router.post('/:id', (req, res) =>{
    setTimeout(() =>{
        if(!req.body.name || req.body.name.length < 3){
            res.status(400).send('The name of the task is required and minimum of 3 characters long.');
            return;
        } 
    
        const task = {
            id: tasks.length + 1,
            name: req.body.name
        };
        tasks.push(task);
        res.send(tasks);
    }, 500);
});

// Return One Task
router.get('/:id', (req, res) =>{
    setTimeout(() =>{
        const task = tasks.find(c => c.id === parseInt(req.params.id));
        if(!task) res.status(404).send('That task was not found');
    
        res.send(task);
    }, 500);
});

// Return All Tasks
router.get('/', (req, res) =>{
    setTimeout(() =>{
        res.send(tasks);
    }, 500);
})

// Update Task
router.put('/:id', (req, res) =>{
    setTimeout(() =>{
        const task = tasks.find(c => c.id === parseInt(req.params.id));
        if(!task) res.status(404).send('That task was not found');
    
        if(!req.body.name || req.body.name.length < 3){
            res.status(400).send('The name of the task is required and minimum of 3 characters long.'); 
            return;
        }
    
        task.name = req.body.name;
        res.send(tasks);
    }, 500);
});

// Delete Task
router.delete('/:id', (req, res) =>{
    setTimeout(() =>{
        //Find task
        const task = tasks.find(c => c.id === parseInt(req.params.id));
        if(!task) res.status(404).send('That task was not found');
    
        //Delete task
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
    
        //Return
        res.send(tasks);
    }, 500);
});

module.exports = router;