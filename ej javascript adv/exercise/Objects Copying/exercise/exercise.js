const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".


person2.firstName = "Simon";

console.log(person1); 
console.log(person2); 


// cuando hay un igual (=) se crea una referencia al mismo onjeto.
// Las dos variables pers1 y pers2 apuntan al mismo objeto, por lo tanto si cambiamos una cosa de la otra , la otra tambien se va a ver cambiada.