let telphone: string[] = ['omar', 'ilham', 'isham']

telphone.push('Esrat')

console.log(telphone)

//concept of tuple -> it is like an array which take fixed number of size. 

let person: [string, number] = ['alice', 23]


//object concept

interface user {
    id: number,
    name: string,
    role: number,
    present: boolean
}

const user1: user = {
    id: 1010, 
    name: 'Omar',
    role: 1,
    present: true
}

console.log(user1.name)