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