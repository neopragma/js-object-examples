/* JavaScript Function Prototype examples */

'use strict';

console.log("==============================");
console.log("JavaScript Create Object from a Function - Examples");

let vehicle = {
	type: "car",
	wheels: 4,
	driverSide: "left",
	propulsion: "electric",
    model: "Dingbat 3000",
    customerFeedback: "Wicked cool"
}

console.log("\n------------------------------")
console.log("The original definition of 'vehicle'");
console.log("La definición original de 'vehicle'")
console.log("\nlet vehicle = {                           // lower-case 'v' because this is a variable name"
	    + "\n                                          // minúscula 'v' porque este es un nombre de variable"
	    + "\n    type: \"car\",                          // commas because these are entries in an array of properties"
	    + "\n                                          // comas porque estas son entradas en una matriz de propiedades"
	    + "\n    wheels: 4,"
	    + "\n    driverSide: \"left\","
	    + "\n    propulsion: \"electric\","
	    + "\n    model: \"Dingbat 3000\","
	    + "\n    customerFeedback: \"Wicked cool\""
	    + "\n}"
);	    

console.log("\n------------------------------")
console.log("Create a 'vehicle' object by using a function");
console.log("This is called a function prototype because the function is a model or template for creating");
console.log("multiple instances of objects of the same type (having the same shape).");
console.log("\nCrea un objeto 'vehicle' usando una función")
console.log("Esto se llama 'function prototype' (prototipo de función) porque la función es un modelo o plantilla para crear");
console.log("múltiples instancias de objetos del mismo tipo (que tienen la misma forma).");
console.log("\nCode/código:");
console.log("\nfunction Vehicle(type, wheels, driverSide, propulsion, model, customerFeedback) {"
	    + "\n                                          // capital 'V' because this defines a type, not a single variable"
	    + "\n                                          // mayúscula 'V' porque esto define un tipo, no una sola variable"
	    + "\n    this.type = type;                     // semicolons because these are separate statements"
	    + "\n                                          // punto y coma porque estas son declaraciones separadas"
	    + "\n    this.wheels = wheels;"
	    + "\n    this.driverSide = driverSide;"
	    + "\n    this.propulsion = propulsion;"
	    + "\n    this.model = model;"
	    + "\n    this.customerFeedback = customerFeedback;"
	    + "\n}"
	    + "\n\nlet myVehicle = new Vehicle(\"car\",4,\"left\",\"electric\",\"Dingbat 3000\",\"Wicked cool\");"
	    + "\n\nlet yourVehicle = new Vehicle(\"car\",4,\"right\",\"Diesel\",\"Devorador de Semáforos\",\"Pure happiness\");"
);
console.log("\nconsole.log(myVehicle is:);");
console.log("for (let [key, value] of Object.entries(myVehicle)) {");
console.log("    console.log(`    ${key}: ${value}`);");
console.log("}");	 
console.log("\nconsole.log(yourVehicle is:);");
console.log("for (let [key, value] of Object.entries(yourVehicle)) {");
console.log("    console.log(`    ${key}: ${value}`);");
console.log("}");	 
console.log("\nResult/resultado:\n");

function Vehicle(type, wheels, driverSide, propulsion, model, customerFeedback) {
	this.type = type;
	this.wheels = wheels;
	this.driverSide = driverSide;
	this.propulsion = propulsion;
	this.model = model;
	this.customerFeedback = customerFeedback;
}

let myVehicle = new Vehicle("car", 4, "left", "electric", "Dingbat 3000", "Wicked cool");
let yourVehicle = new Vehicle("car", 4, "right", "Diesel", "Devorador de Semáforos", "Pure happiness");

console.log("myVehicle is:");
for (let [key, value] of Object.entries(myVehicle)) {
	console.log(`    ${key}: ${value}`);
}

console.log("\nyourVehicle is:");
for (let [key, value] of Object.entries(yourVehicle)) {
	console.log(`    ${key}: ${value}`);
}

