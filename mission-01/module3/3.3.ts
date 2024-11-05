{
//


//type guard and  in guard

// type NumericalValue =  string | number;

// let  add = (param1: NumericalValue, param2: NumericalValue):NumericalValue =>{

// if(typeof param1 === 'number' && typeof param2 === 'number'){
//         return param1 + param2;
// }else{
//     return param1.toString() + param2.toString()
// }


// // in guard

type AdminUser = {
    name: string,
    role: 'ADMIN'
}

type normalUser = {
    name: string
}

const getUserFun = (user: AdminUser | normalUser):void =>{
    if('role' in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    }else{
        console.log(`my name is ${user.name}`)
    }
}


const AdminUser = {
    name: "omar",
    role: 'Admin'
}
const normalUser = {
    name: 'Talha'
}

getUserFun(normalUser )



// function getUser(arg0: string, arg1: string): any {
//     throw new Error("Function not implemented.")
// }
//

}

