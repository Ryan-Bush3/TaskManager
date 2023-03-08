const EventEmitter = require('events');

class TestApplication extends EventEmitter{
    loadApplication(message){
        console.log(message);
        this.emit('loadApplication');
    }
}

module.exports = TestApplication;