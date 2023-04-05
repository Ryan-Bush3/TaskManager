const Joi = require('joi');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const users = require('./routes/users');
const db = require('./routes/db-tasks');
const auth = require('./routes/auth');

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/tasks/inmemory', tasks);
app.use('/api/tasks', db);
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));