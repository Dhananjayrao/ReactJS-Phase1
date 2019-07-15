

2)What is the difference between interpreted and compiled language?Give examples for each.

In an interpreted language, the code is translated step by step while the program is being executed, while compiled code is translated to machine instructions before the code is executed.
In interpreted language, the code is translated into an intermediate language which is then examined by the 'interpreter' to perform any actions required, compilations and executions occur simultaneously in an interpreted language, if an error is observed the compilation moves no futher.

ex-Python is converted into bytecode which is then futher interpreted, C is a compiled language where the entire code is compiled at first

3)What are the different ways of defining a variable?Explain with examples. What is the disadvantage of using var?

let,var and const are used to define variables. The main difference between let and var is that let has scope restraints i.e it is only limited to the scope in which it is declared. Although the value of a let variable can be changed it cannot be redeclared, unlike var variables. The main disadvantage of using var variables is that the scope remains global, so any changes made to the variable in a particular function will reflect in the original variable, allowing the original variable to be manipulated. Const declarations can be used to declare variables that cannot change their value, const variablescannot be redeclared nor can they change their original values.Const variables must be initialised whenever thay're declared and cannot be declared later on.

ex -
var a = 1;

function one() {
  
    let a = 4;
  
}

console.log(a); //prints 4 because the 'let' keyword uses block scoping

one();

4)What are the different types of scopes in javascript? Explain with examples each in detail.
Global Scope -
The area outside all functions is considered to be the global scope and the variables defined in the global scope can be accessed by any other scope.

ex-

//global scope
var fruit = 'apple'
console.log(fruit);        //apple

function getFruit(){
    
    console.log(fruit);    //fruit is accessible here

}

getFruit();                //apple

Function Scope -
variables declared inside a function become limited to the function and considered in the corresponding function scope, i.e cannot be used outside the function in which it is declared

ex-

function one() {
  
    var a = 4;
  

      
}
one();

console.log(a);  //error because a is not defined beyond the function

Block scope
A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block




promise-
promise is used to ensure the event loop that a particular operation will definitely provide an output.
promise function takes in two parameters one of which is a remote function which itself has two other functions as parameters resolve and reject.

let a=newPromise((resolve,reject)=>{resolve(data) or reject(error)},
program-
let a=new Promise((resolve,reject)=>{resolve("hi");})
a.then((value)=>{console.log(value)})
.catch((value)=>{});

