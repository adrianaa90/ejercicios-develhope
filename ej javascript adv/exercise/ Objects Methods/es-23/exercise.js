const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys=Object.keys(person);
let clave = "firstName";
console.log(person[clave]);
for(let i=0; i<keys.length; i++){
  let llave= keys[i]
  console.log(llave + ":" + person[llave] );
}

// Print values of person using Object.keys