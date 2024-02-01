function printAsyncName(callback, name) {
    setTimeout(() => {
        console.log("Hello");
        setTimeout(() => {
            console.log(name);
        }, 1000);
    }, 2000);
}


function callbackFunction() {
    console.log("callback funcionando");
}

printAsyncName(callbackFunction, "Adri");
