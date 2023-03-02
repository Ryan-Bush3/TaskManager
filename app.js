// const express = require('express');
// const app = express();

// app.use(express.json());

// let tasks = [];

const TestApplication = require('./logger');
const testapplication = new TestApplication();
const fs = require('fs');
let data = "Application loaded!\n";

testapplication.on('loadApplication', () =>{
    fs.appendFile('logger.txt', data, (err) => {
        if(err){
            throw err;
        } else{
            console.log('Finished!');
        }
    });
});

testapplication.loadApplication('Application is loading...');



// app.post('/api/tasks/:id', (req, res) =>{
//     const task = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     task.push(tasks);
//     res.send(task);
// });



// const port = process.env.PORT || 3000;
// app.listen(3000, () => console.log(`Listening on port ${port}...`));