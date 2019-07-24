

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
whenever you see {curly brackets}, it is a block. const and let keywords allow us to declare variables in the block scope, which means those variables exist only within the corresponding block

ex-
function foo(){
   
   if(true){
        
        var fruit1 = 'apple';        //exist in function scope
        
        const fruit2 = 'banana';     //exist in block scope
        
        let fruit3 = 'strawberry';   //exist in block scope

    }
    
    console.log(fruit1);
    
    console.log(fruit2);
    
    console.log(fruit3);

}

foo();

//result:

//apple

//error: fruit2 is not defined

//error: fruit3 is not defined




promise-
promise is used to ensure the event loop that a particular operation will definitely provide an output.
promise function takes in two parameters one of which is a remote function which itself has two other functions as parameters resolve and reject.

let a=newPromise((resolve,reject)=>{resolve(data) or reject(error)},
program-
let a=new Promise((resolve,reject)=>{resolve("hi");})
a.then((value)=>{console.log(value)})
.catch((value)=>{});



Rendering Of Websites
Browser rendering engine
Software that renders HTML pages (Web pages). It turns the HTML layout tags in the page into the appropriate commands for the operating system, which causes the formation of the text characters and images for screen and printer. Also called a "layout engine," a rendering engine is used by a Web browser to render HTML pages, by mail programs that render HTML email messages, as well as any other application that needs to render Web page content.
Block Diagram explained in detail


BlockDiagram in detail
HTML & CSS Rendering :
The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements

Parser:
A parser is a compiler or interpreter component that breaks data into smaller elements for easy translation into another language. A parser takes input in the form of a sequence of tokens or program instructions and usually builds a data structure in the form of a parse tree or an abstract syntax tree.

paint() :
Each render object has a paint() which calls to display any object or text to the user.

JAVA SCRIPT ENGINE
A JavaScript engine is a computer program that executes JavaScript (JS) code. The first JS engines were mere interpreters, but all relevant modern engines utilize just-in-time compilation for improved performance.

List of JS engine and their inventors
V8 Engine
JS Core
CHAKRA core
Spider monkey
Hermes engine
JS engine	inventors
V8 Engine	chrome
JS Core	Safari
CHAKRA Core	Microsoft
Spider monkey	Mozilla
Hermes engine	Facebook
Difference between Interpreter and Compiler Language
Compiler	Interpreted
It considers the completion of your program as input for converting to machine code.	It considers 1 statement in your program at a time as input for converting to machine code.
It usually generates intermediate code in the form of the object file (.obj).	It doesn't create an intermediate object (.obj) code.
Faster execution of control statements as compared to the interpreter.	Slower execution of control statements as compared to the compiler.
Detected errors in the program get displayed after the entire program is read by compiler.	Detected errors in the program get displayed after each instruction read by the interpreter.
Example: C++, Java.	Example. BASIC, Python, PHP.

