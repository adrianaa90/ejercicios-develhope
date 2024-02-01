//Write a promise. If the variable called number is greater than 10, then it returns a resolve, otherwise it returns a reject. Then manage the promise with then and catch in case of any reject.


const number = 15;

let promise=new Promise((resolve, reject) => {
    if(number >10 ) {resolve("mayor que 10")}
        else{reject("menor que 10") }
})

promise.then( (respuesta)=>{console.log(respuesta)}).catch ((error)=>{console.log(error)})

