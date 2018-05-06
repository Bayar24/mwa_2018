var EventEmitter = require('events');
var util = require('util');
class Clock extends EventEmitter{
	constructor(){
		super();
		setTimeout(() => {
			this.emit('tick');	
		}, 1000);
	}
}

var clock = new Clock();
clock.on('tick', function(){console.log('Woohoo')});

