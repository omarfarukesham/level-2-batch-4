//ternary || optional chaining || nullish coalensing operator

let age: number = 12

if(age >= 18){
    console.log('Adult')
}else{
    console.log('Child')
}


// nullish coalesing means the values might be null or undefined that express with double ?? operator

const isAuthenticated = null

const result1 = isAuthenticated ?? "Guest"
console.log(result1)