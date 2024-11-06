{
    class BankAccount {
      public readonly id: number;
        public name: string;
        private _balance: number;
    
        constructor(id:number, name: string, balance: number){
            this.id =  id;
            this.name =  name;
            this._balance = balance
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }



    const poorPeople  = new BankAccount(1212, 'OMAR', 3000)


    poorPeople.addDeposit(50)

    console.log(poorPeople.getBalance())

    class StudentAccount extends BankAccount{
        test(){
            this.name;
            this.id;
        }
    }



            
}