const accountId=22
let accountEmail="hit@gmail.com"
var accountPassword="1234"
accountCity="japan"

//can we change all of these

//accountId=2    //no we can't change the const
accountPassword="anchl"  //we can change this let variable
console.log(accountPassword)
console.log(accountId)

console.table([accountEmail,accountId,accountPassword])   //show the data in tabular form 

//we cand declare variable into two ways 1-let,var and const is constant we can't change the update the value we can update the value of object
//not to use var because of issue in block scope and functional scope 

const id={
    Name:"Anchl",
    marks:23
}
console.log(id.marks)
id.marks=id.marks+1;
console.log(id.marks);

let accountState;
console.log(accountState);  // it will give the output undefined

//number =>2 to power 53
//bigInt
//String=>""
//boolean=true /false
//undefined
//symbol= uniqueness


//object non-primitive

console.log(typeof null)    //null is object
console.log(typeof undefined ) //undefined