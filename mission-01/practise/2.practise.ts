{

 

    //function literal types 
    function setRole(role: 'admin' | 'teacher' | 'guest'):string{
        return  `The user role is ${role}`
    }

    console.log(setRole('teacher'))


    //object types, type alias, literal types

    type Person = {
        name: string,
        city: string,
        address?: {
            home: string,
            road: number,

        }
        phone?: number,
    }


    const user: Person = {
        name: 'omar',
        city: 'dhaka'
    }

    console.log(user.city)

    //type alias
    type ID = number | string;

    type StudentInfo = {
        name: string;
        id: ID;
        class:string,

    }


    const stdUserInfo: StudentInfo = {
        name: 'omar',
        id: 123,
        class: 'seven'
    }


    //union and intersection

    type treeColor = 'green' | 'yellow'


    type UserPersonalInfo = {
            name: string,
            age?: number
    }
    type GeneralCredential = {
        email: string,
        passward: string | number,
    }

    type AuthenticInfo = UserPersonalInfo & GeneralCredential;


    const permissionObj: AuthenticInfo = {
        name: 'Isham',
        email: 'omar@gmail.com',
        passward: 123
    }

    console.log(permissionObj.email)

    //function type alias 

    // Define a reusable function type
type MathOperation = (a: number, b: number) => number;

// Use the function type alias
const multiply: MathOperation = (x, y) => x * y;
const subtract: MathOperation = (x, y) => x - y;


console.log(subtract(10, 10))


// spread, rest operator, destructuring

//spread operator means one array or object, can spread with another new array or object

let flower:string[] = ['rose', 'belli']

let newFlower = [...flower, 'kakimni']

console.log(newFlower[2])

// rest operator -> when it is needed to pass multiple argument with a function, rest operator help us to pass multiple arugment 
//with a single one which is rest operator simillar pattern followed by spread operator like three dots

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(4, 5, 6, 7, 8)); // Output: 30





// intersection and optional chaining
type People = {
    name?: string,
    city: string,
    age?: number
}
type ProfileCred = {
    email: string;
    role?: number | string;
}

type UserAllInfo = People & ProfileCred;



const personEmployee: UserAllInfo = {
    name: "Alice",
    city: 'Dhaka',
    age: 30,
    role: "Developer",
    email: 'omar@gmail.com'
  };



const userInput = 0;
const msg = userInput ?? 'No, user find'

console.log(msg)








}