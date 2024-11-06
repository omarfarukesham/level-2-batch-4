{
    //static in oop

 class counter{
   static count:number = 0;

   static increment(){
       return  counter.count = counter.count + 1
    }
   static decrement(){
       return  counter.count = counter.count - 1
    }
 }


// const instance1 = new counter()
// const instance2 = new counter()


console.log(counter.increment())
console.log(counter.increment())










}

