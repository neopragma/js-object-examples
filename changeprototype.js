/* Changing a prototype vs. changing an instance */

'use strict'

function Vehicle(propulsion, model, customerFeedback) {
	this.propulsion = propulsion;
	this.model = model;
	this.customerFeedback = customerFeedback;
}

function Car(wheels, driverSide, propulsion, model, customerFeedback) {
	this.wheels = wheels;
	this.driverSide = driverSide;
	this.propulsion = propulsion;
	this.model = model;
	this.customerFeedback = customerFeedback;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let car1 = new Car(4, 'left', 'rocket', 'Fast Company', 'Yikes!');

console.log(car1);

let car2 = new Car(4, 'center', 'steam', 'Stanley 1', 'Hot stuff!');

console.log(car2);


let car3 = new Car(4, 'right');

console.log(car3);

car3.seats = 'leather';

console.log(car3);

Vehicle.prototype.seats = 'cloth';

let car4 = new Car(6, 'backseat', 'feet', 'Model F', 'Yabba-dabba-doo!');

console.log(car4);