function printName() {
    const helloName = "Hello John";

    function inner() {
        return helloName;
    }

    return inner;
}

const innerFunction = printName();

console.log(innerFunction());