
{
    // type vs interface
    type User = {
        name: 'omar'
        city: 'Dhaka'
    }



    //interface specially used in objects

    interface User1 {
        name: 'omar';
        city: "Dinajpur"
    }


//for the concept of extand -> interface can extends with Type

interface VIPuser extends User{
    discription: string
}


//type can be extends by intersction 

type VIPuser2 = User1 & {benefits: string[]}


//interface and type both can extend by each other but in a different ways like interface can use in extends key words where
// type can be intersection operator. 









}