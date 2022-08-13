/* JavaScript Class examples */

'use strict';

console.log("==============================");
console.log("JavaScript Inheritance and Classes - Examples");

console.log("\n------------------------------")
console.log("Function prototypes for Vehicle and Car");
console.log("'Function prototype' para Vehicle y Car")

console.log("\nCode/código:\n");
console.log("function Vehicle(propulsion, model, customerFeedback) {");
console.log("	this.propulsion = propulsion;");
console.log("	this.model = model;");
console.log("	this.customerFeedback = customerFeedback;");
console.log("}");
console.log("\nfunction Car(wheels, driverSide, propulsion, model, customerFeedback) {");
console.log("	this.wheels = wheels;");
console.log("	this.driverSide = driverSide;");
console.log("}");
console.log("Car.prototype = Object.create(Vehicle.prototype);");
console.log("Car.prototype.constructor = Car;");

console.log("\nlet myCar = new Car(4, \"left\", \"electric\", \"Dingbat 3000\", \"Wicked cool\");");
console.log("console.log(myCar);");


function VehicleF(propulsion, model, customerFeedback) {
	this.propulsion = propulsion;
	this.model = model;
	this.customerFeedback = customerFeedback;
}

function CarF(wheels, driverSide, propulsion, model, customerFeedback) {
	this.wheels = wheels;
	this.driverSide = driverSide;
	this.propulsion = propulsion;
	this.model = model;
	this.customerFeedback = customerFeedback;
}

CarF.prototype = Object.create(VehicleF.prototype);
CarF.prototype.constructor = CarF;

let myCar = new CarF(4, "left", "electric", "Dingbat 3000", "Wicked cool");

console.log("\nResult/resultado:\n");
console.log(myCar);

console.log("\n------------------------------")
console.log("The same functionality coded using classes looks like this.");
console.log("La misma funcionalidad codificada usando clases se ve así.");
console.log("\nclass Vehicle {");
console.log("	constructor(propulsion, model, customerFeedback, customerComment) {");
console.log("	    this.propulsion = propulsion;");
console.log("	    this.model = model;");
console.log("	    this.customerFeedback = customerFeedback;");
console.log("	    this.customerComment = customerComment;");
console.log("	}");
console.log("	isHighlyRated() {");
console.log("		return this.customerFeedback > 6;");
console.log("	}");
console.log("}");
console.log("\n");
console.log("class Car extends Vehicle {");
console.log("	constructor(wheels, driverSide, propulsion, model, customerFeedback) {");
console.log("		super(propulsion, model, customerFeedback);");
console.log("		this.wheels = wheels;");
console.log("		this.driverSide = driverSide;");
console.log("   }");
console.log("}");
console.log("\nlet myClassyCar = new Car(4, \"left\", \"electric\", \"Dingbat 3000\", \"Wicked cool\");");
console.log("\nconsole.log(myClassyCar);");
console.log("");
console.log("");

class Vehicle {
	constructor(propulsion, model, customerFeedback, customerComment) {
	    this.propulsion = propulsion;
	    this.model = model;
	    this.customerFeedback = customerFeedback;
	    this.customerComment = customerComment;
	}
	isHighlyRated() {
		return this.customerFeedback > 6;
	}
}

class Car extends Vehicle {
	constructor(wheels, driverSide, propulsion, model, customerFeedback) {
		super(propulsion, model, customerFeedback);
		this.wheels = wheels;
		this.driverSide = driverSide;
	}
}

let myClassyCar = new Car(4, "left", "electric", "Dingbat 3000", 8, "Wicked cool");

console.log("\nResult/resultado:\n");
console.log(myClassyCar);
let highlyRated = myClassyCar.isHighlyRated();
console.log(`\nIs myClassyCar highly rated by customers? ${highlyRated ? "Yes, it is!" : "No, it isn't."}`);
console.log(`\n¿Está myClassyCar altamente calificado por los clientes? ${highlyRated ? "¡Sí, lo es!" : "No, no lo es."}`);


console.log("\n------------------------------")
console.log("Most people find it much easier to work with classes than with function prototypes.");
console.log("La mayoría de la gente piensa que es más fácil trabajar con clases que con prototipos de funciones.");
console.log("");
console.log("");
console.log("");




