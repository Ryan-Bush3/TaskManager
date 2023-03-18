const Joi = require('joi');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const db = require('./routes/db-tasks');

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/tasks/inmemory', tasks);
app.use('/api/tasks', db);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));