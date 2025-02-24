
let str1="hello";
let str2="anchl";
let str=str1+str2;
console.log(str)   //helloanchl

let str4=3;
let add=str4+str2;
console.log(add) //3anchl

let str5=2;
add=str5+str4;
console.log(add)  //5

console.log("1"+2+2)  //122  because 1 is a string and there is some set of rules which we have used here  as conversion of string to number
console.log(2+2+"1")   //41 as in this case 2+2 is added and gives the output 4 and 1 is the string  which is added  at the last
 console.log(true)     //true
 console.log(+true)   //not a good practice but it will print 1


 let i=10;
 console.log(i++,i)
 console.log(++i,i)



 //comparison

console.log("2">1);  //true
console.log("02">1);  //true
console.log(null>0)  //false
console.log(null==0) //false
console.log(null>=0) //true

console.log("02"==2)  //true
console.log("02"===2) //false