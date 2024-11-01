//type assertion and type narrowing

type User = {
    id: number;
    name: string;
    email: string;
}

function fetchUserData(): any{
        return {id: 1, name: 'omar', email: 'omar.lu@gmail.com'}
}   


const userData = fetchUserData() as User;

console.log(userData.name)
