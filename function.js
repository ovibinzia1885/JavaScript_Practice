function myFunction() {
    // This is a sample function
    console.log("Hello, World!");
}

myFunction();

//anonimus function example


var helloTwo = function() {
    console.log("Hello from anonymous function!");
}
helloTwo()

//Function with parameters
function greet(name, age) {
    console.log("Hello, " + name + "! You are " + age + " years old.");
}   
greet("Alice", 30);

//Function with return value
function add(a, b) {
    return a + b;
}   
var sum = add(5, 10);
console.log("Sum: " + sum);

//import function from another file
import { myFunction as addFunction } from './helperfile.js'
var result = addFunction(20, 30);
console.log("Result from imported add function: " + result);