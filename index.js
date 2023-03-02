const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

// Add task
app.post('/api/tasks/:id', (req, res) =>{
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
});

// Return One Task
app.get('/api/tasks/:id', (req, res) =>{
    const task = tasks.find(c => c.id === parseInt(req.params.id));
    if(!task) res.status(404).send('That task was not found');

    res.send(task);
});

// Return All Tasks
app.get('/api/tasks', (req, res) =>{
    res.send(tasks);
})

// Update Task
app.put('/api/tasks/:id', (req, res) =>{
    const task = tasks.find(c => c.id === parseInt(req.params.id));
    if(!task) res.status(404).send('That task was not found');

    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('The name of the task is required and minimum of 3 characters long.');
        return;
    }

    task.name = req.body.name;
    res.send(tasks);
});

// Delete Task
app.delete('/api/tasks/:id', (req, res) =>{
    //Find task
    const task = tasks.find(c => c.id === parseInt(req.params.id));
    if(!task) res.status(404).send('That task was not found');

    //Delete task
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);

    //Return
    res.send(tasks);
});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));