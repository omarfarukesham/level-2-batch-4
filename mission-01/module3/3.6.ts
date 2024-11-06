{

//getter and setter

    class BankAccount {
     id: number;
        name: string;
        _balance: number;
    
        constructor(id:number, name: string, balance: number){
            this.id =  id;
            this.name =  name;
            this._balance = balance
        }

        // addDeposit(amount: number){
        //     this._balance = this._balance + amount;
        // }
        set  deposit(amount: number){
            this._balance = this.Balance + amount
            
        }
        //getter 
        get Balance(){
            return this._balance
        }
        // setter 
      

        // getBalance(){
        //     return this._balance;
        // }
    }



    const poorPeople  = new BankAccount(1212, 'OMAR', 300)
        poorPeople.deposit = 3

console.log(poorPeople.Balance)
    // poorPeople.addDeposit(50)

    // console.log(poorPeople.getBalance())

 



            
}