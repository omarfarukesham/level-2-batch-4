{
    class BankAccount {
      public readonly id: number;
        public name: string;
        private balance: number;
    
        constructor(id:number, name: string, balance: number){
            this.id =  id;
            this.name =  name;
            this.balance = balance
        }

        addDeposit(amount: number){
            this.balance = this.balance + amount;
        }

        getBalance(){
            return this.balance;
        }
    }



    const poorPeople  = new BankAccount(1212, 'OMAR', 3000)


    poorPeople.addDeposit(50)

    console.log(poorPeople.getBalance())



            
}