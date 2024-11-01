
//regular function
// function addNum(num1:number, num2:number):number{
//     return num1 + num2
// }

// //arrow function 

// const arrowFun = (num1:number, num2:number): number => num1*num2


// ts map of array

// const students: string[] = ['Omar', 'Ali', 'Talha']

// const newStdArray =  students.map((std:string):string => std + 's')
// console.log(newStdArray)

const students: string[] = ['Omar', 'Ali', 'Talha'];

const newStdArray = students.map((std) => std + 's');
console.log(newStdArray); // Output: ['Omars', 'Alis', 'Talhas']
