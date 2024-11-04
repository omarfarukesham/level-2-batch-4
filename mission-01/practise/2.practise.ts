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


    
}