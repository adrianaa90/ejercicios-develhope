//Starting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?//
//The callback function must be an arrow function, can you also explain why?//



function repeatHello(callback) {
    let setInterval_id = setInterval(() => {callback()},1000);

     clearInterval(setInterval_id)
     setTimeout(() => {clearInterval_id})
}



repeatHello(()=>console.log("Hello"));