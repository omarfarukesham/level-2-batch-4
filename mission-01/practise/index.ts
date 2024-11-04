
{
    //





/*
Task 1: Basic Data Types and First Program
Objective: Write a TypeScript program that outputs a welcome message.

Instructions:

Create a TypeScript program.
Print the following message to the console:
Hello World, I will complete this course successfully and become a Next level Web Developer!
**/

// string, number, boolean, null, undefined, bigIn, ---- array, tuple, object, function

// const message: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!"

// console.log(message)

/*Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action. **/

type Role = 'admin' | 'user' | 'guest'


function optionalLiteral(name: string, age: number, role: Role){
        return `this person ${name} and age is ${age}, he is a/an ${role}`
}

console.log(optionalLiteral('Iiham', 35, 'guest'))

//
}

/*
Task 3: Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, 
Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
*/


type Person = {
    name: string,
    hair: string,
    eyeColor: string,
    income: number,
    expense: number, 
    hobbies: string, 
    familyMember: number, 
    job: boolean,
    skills: string,
    maritalStatus: boolean,
    friends: string
}