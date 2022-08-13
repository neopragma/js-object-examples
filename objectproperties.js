/* JavaScript Objects examples */

'use strict';

console.log("==============================");
console.log("JavaScript Object Properties - Examples");

let vehicle = {
	type: "car",
	wheels: 4,
	driverSide: "left",
	propulsion: "electric",
    model: "Dingbat 3000",
    customerFeedback: "Wicked cool"
}

console.log("\n------------------------------")
console.log("The definition of 'vehicle'");
console.log("La definición de 'vehicle'")
console.log("\nlet vehicle = {"
	    + "\n    type: \"car\","
	    + "\n    wheels: 4,"
	    + "\n    driverSide: \"left\","
	    + "\n    propulsion: \"electric\","
	    + "\n    model: \"Dingbat 3000\","
	    + "\n    customerFeedback: \"Wicked cool\""
	    + "\n    }"
);	    

console.log("\n------------------------------")
console.log("1. Get the names of all the properties of object 'vehicle'");
console.log("   Obtenga los nombres de todas las propiedades del objeto 'vehicle'");
console.log("\nCode/código:");
console.log("\nObject.getOwnPropertyNames(vehicle);");
console.log("\nResult/resultado:\n");
console.log(Object.getOwnPropertyNames(vehicle));

console.log("\n------------------------------")
console.log("Another way to get the names of all the properties of object 'vehicle'");
console.log("Otra forma de obtener los nombres de todas las propiedades del objeto 'vehicle'");
console.log("\nCode/código:");
console.log("\nObject.keys(vehicle);");
console.log("\nResult/resultado:\n");
console.log(Object.keys(vehicle));

console.log("\n------------------------------")
console.log("Properties are stored as key-value pairs, so you can also get just the values:");
console.log("Las propiedades se almacenan como pares clave-valor, por lo que también puede obtener solo los valores:");
console.log("\nCode/código:");
console.log("\nObject.values(vehicle);");
console.log("\nResult/resultado:\n");
console.log(Object.values(vehicle));

console.log("\n------------------------------")
console.log("You can also get the key-value pairs:");
console.log("También puede obtener los pares clave-valor:");
console.log("\nCode/código:\n");
console.log("for (let [key,value] of Object.entries(vehicle)) {");
console.log("	console.log(`Property name: ${key}, value: ${value}`);");
console.log("}");
console.log("\nResult/resultado:\n");

for (let [key,value] of Object.entries(vehicle)) {
	console.log(`Property name: ${key}, value: ${value}`);
}



console.log("\n------------------------------")
console.log("2. Get the value of a named property (method 1)");
console.log("   Obtener el valor de una propiedad con nombre (método 1)");
console.log("\nCode/código:");
console.log("\nvehicle.propulsion;");
console.log("\nResult/resultado:\n");
console.log(vehicle.propulsion);

console.log("\nGet the value of a named property (method 2 - bracket notation)");
console.log("Obtener el valor de una propiedad con nombre (método 2 - notación de corchetes)");
console.log("\nCode/código:");
console.log("\nvehicle['propulsion'];");
console.log("\nResult/resultado:\n");
console.log(vehicle['propulsion']);

console.log("\nBracket notation is useful when the name of the property is in a variable.")
console.log("La notación de corchetes es útil cuando el nombre de la propiedad está en una variable.\.")
console.log("\nCode/código:");
console.log("\nlet feedbackProperty Name = 'customerFeedback;");
console.log("console.log(\"The feedback is: \" + vehicle[feedbackPropertyName]);");
console.log("\nResult/resultado:\n");

let feedbackPropertyName = 'customerFeedback';
console.log("The feedback is: " + vehicle[feedbackPropertyName]);




console.log("\n------------------------------")
console.log("3. Every property has a property descriptor.")
console.log("   The property descriptor has three boolean flags that control how the object can be manipulated.")
console.log("\n   Cada propiedad tiene un 'property descriptor' (descriptor de la propiedad).")
console.log("   El 'property descriptor' tiene tres indicadores booleanas que controlan cómo se puede manipular el objeto.")
console.log("\nGet the property descriptor for property 'model' on object 'vehicle'");
console.log("Obtenga el 'property descriptor' (descriptor de la propiedad) para la propiedad 'model' en el objeto 'vehicle'");
console.log("\nCode/código:");
console.log("\nObject.getOwnPropertyDescriptor(vehicle, 'model');");
console.log("\nResult/resultado:\n");
console.log(Object.getOwnPropertyDescriptor(vehicle, 'model'));


console.log("\n------------------------------")
console.log("The property 'writable=true' means you can update the property, like this:");
console.log("La propiedad 'writable=true' significa que puede actualizar la propiedad, así:")
console.log("\nBefore/antes: vehicle.driverSide\n");
console.log(vehicle.driverSide);
console.log("\nCode/código:");
console.log("\nvehicle.driverSide = 'right';");
vehicle.driverSide = "right";
console.log("\nAfter/después: vehicle.driverSide\n");
console.log(vehicle.driverSide);


console.log("\n------------------------------")
console.log("You can change a property value like this:");
console.log("Puede cambiar el valor de una propiedad así:");
console.log("\nObject.defineProperty(vehicle, \"customerFeedback\", {"
	      + "\n    writable: false"
	      + "\n});"
	      + "\nvehicle.customerFeedback = \"Not so great\";\n"
);

Object.defineProperty(vehicle, "customerFeedback", {
    writable: false
});
try {
    vehicle.customerFeedback = "Not so great";
} catch (e) {
	console.log(e);
}


console.log("\nYou must specify 'use strict' or the operation will fail silently.");
console.log("Debe especificar 'use strict' o la operación fallará en silencio.");


console.log("\n------------------------------")
console.log("The property 'enumerable=true' means that when you list the properties, this property will appear. (See example 1)");
console.log("La propiedad 'enumerable=true' significa que cuando lista las propiedades, esta propiedad aparecerá. (Ver ejemplo 1)");

console.log("\n------------------------------")
console.log("The property 'configurable=true' means you can change the values of the properties.");
console.log("La propiedad 'configurable=true' significa que puede cambiar los valores de las propiedades.");
console.log("\nTherefore, if you set 'configurable=false', you won't be able to change it back again.");
console.log("Por lo tanto, si establece 'configurable=false', no podrá volver a cambiarlo.");

