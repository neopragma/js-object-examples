/* JavaScript Function Prototype examples */

'use strict';

console.log("==============================");
console.log("JavaScript Inheritance and Object Prototypes - Examples");

console.log("\n------------------------------")
console.log("Function prototype for 'Vehicle'");
console.log("'Function prototype' para 'Vehicle'")
console.log("\nfunction Vehicle(type, wheels, driverSide, propulsion, model, customerFeedback) {"
	    + "\n    this.type = type;"
	    + "\n    this.wheels = wheels;"
	    + "\n    this.driverSide = driverSide;"
	    + "\n    this.propulsion = propulsion;"
	    + "\n    this.model = model;"
	    + "\n    this.customerFeedback = customerFeedback;"
	    + "\n}"
	    + "\n\nlet myVehicle = new Vehicle(\"car\",4,\"left\",\"electric\",\"Dingbat 3000\",\"Wicked cool\");"
);


function Vehicle(type, wheels, driverSide, propulsion, model, customerFeedback) {
	this.type = type;
	this.wheels = wheels;
	this.driverSide = driverSide;
	this.propulsion = propulsion;
	this.model = model;
	this.customerFeedback = customerFeedback;
}
let myVehicle = new Vehicle("car", 4, "left", "electric", "Dingbat 3000", "Wicked cool");


console.log("\n------------------------------")
console.log("1. Every object has an object prototype.");
console.log("   Cada objeto tiene un 'object prototype' (prototipo de objeto)");
console.log("\nCode/código: (Notice the syntax/Fíjate en la sintaxis)");
console.log("\nconsole.log(myVehicle.__proto__.__proto__);");
console.log("\nResult/resultado:\n");
console.log(myVehicle.__proto__.__proto__);

console.log("\nThis pertains to object inheritance. Every JavaScript object is derived from a higher level object.");
console.log("This result means Vehicle inherits from Object. Object has no properties, so it is empty.");
console.log("\nEsto pertenece a la herencia de objetos. Cada objeto de JavaScript se deriva de un objeto de nivel superior.")
console.log("Este resultado significa que Vehicle hereda de Object. El objeto Object no tiene propiedades, por lo que está vacío.");

console.log("\nThe Object object is the top of the hierarchy. Object has no prototype. ")
console.log("To demonstrate this, try to display the prototype of the Object object.")
console.log("\nEl objeto Object es la parte superior de la jerarquía. El objeto 'Object' no tiene prototipo.");
console.log("Para demostrar esto, intente mostrar el prototipo del objeto 'Object'.")
console.log("\nCode/código:\n");
console.log("console.log(myVehicle.__proto__.__proto__.__proto__);");
console.log("\nResult/resultado:\n");
console.log(myVehicle.__proto__.__proto__.__proto__);



console.log("\n------------------------------")
console.log("2. Inheritance");
console.log("Car is a more specific concept than vehicle. Every car is a vehicle, but every vehicle is not a car.");
console.log("That means a car inherits all the attributes of a vehicle, and may have additional ones.");
console.log("A vehicle might not have wheels - it could be a boat or an airplane.")
console.log("Let's define an object hierarchy that reflects that relationship.");

console.log("\nHerencia (Inheritance)");
console.log("Coche es un concepto más específico que vehículo. Todo coche es un vehículo, pero todo vehículo no es un coche.");
console.log("Eso significa que un automóvil hereda todos los atributos de un vehículo y puede tener otros adicionales.");
console.log("Es posible que un vehículo no tenga ruedas; podría ser un barco o un avión.");
console.log("Definamos una jerarquía de objetos que refleje esa relación.");

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
console.log("\nWe use Object.create() to create an instance of the Vehicle prototype and assign that instance as the prototype of Car.");
console.log("Then we assign the Car() function as the constructor in Car's new prototype. Otherwise the constructor will continue to call Vehicle().");
console.log("\nUsamos Object.create() para crear una instancia del prototipo de Vehicle y asignar esa instancia como prototipo de Car.");
console.log("Luego asignamos la función Car() como constructora en el nuevo prototipo de Car. De lo contrario, el constructor seguirá llamando a Vehicle().");

console.log("\nCode/código:\n");
console.log("Car.prototype = Object.create(Vehicle.prototype);");
console.log("Car.prototype.constructor = Car;");

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

console.log("\nNow we'll instantiate a Car object.")
console.log("Ahora crearemos una instancia de un objeto Car.")
console.log("\nCode/código:\n");
console.log("let myCar = new Car(3, 'right', 'vodka', 'Spiffo 7', 'Yes, indeed!');");

let myCar = new Car(3, 'right', 'vodka', 'Spiffo 7', 'Yes, indeed!');

console.log("\nLet's display the properties of the myCar object.")
console.log("Vamos a mostrar las propiedades del objeto myCar.")
console.log("\nCode/código:\n");
console.log("for (let [key, value] of Object.entries(myCar)) {");
console.log("	console.log(`    Property name: ${key}, value: ${value}`);");
console.log("}");
console.log("\nResult/resultado:\n");

for (let [key, value] of Object.entries(myCar)) {
	console.log(`    Property name: ${key}, value: ${value}`);
}

console.log("\nNow let's see the object prototype hierarchy.");
console.log("Ahora veamos la jerarquía de prototipos de objetos.");
console.log("\nCode/código:\n");
console.log("myCar.__proto__");
console.log("myCar.__proto__.__proto__");
console.log("myCar.__proto__.__proto__.__proto__");
console.log("\nResult/resultado:\n");

console.log("myCar object prototype is Vehicle with the Car constructor added.");
console.log("El prototipo del objeto myCar es un Vehicle con el constructor de Car agregado.\n");
console.log(myCar.__proto__);
console.log("\nNext level up: Vehicle's object prototype is Object.");
console.log("Siguiente nivel: el prototipo de objeto del Vehicle es Object.\n");
console.log(myCar.__proto__.__proto__);
console.log("\nNext level up: Object has no object prototype.");
console.log("Siguiente nivel: 'Object' no tiene prototipo de objeto.\n");
console.log(myCar.__proto__.__proto__.__proto__);
