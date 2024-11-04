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

}