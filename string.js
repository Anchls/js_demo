//string is dinoted by ""
 const Name="anchl"
 const age=21
 console.log(Name +age) //anchl21

 //string litrals
 console.log(`hello my name is ${Name} and my age is ${21}`)

 const gameName=new String('Anchl')
 console.log(gameName)              //{string:'anchl}
 console.log(gameName.__proto__);  //{} its will give the object

 console.log(gameName.length);      //5
 console.log(gameName.toUpperCase()); //ANCHL
 console.log(gameName.charAt(3))        //check the character at certain position 


 console.log(gameName.indexOf('c')); //2
 const newString= gameName.substring(0,2);

 const another=gameName.slice(-8,4);
 console.log(another);  //Anch

 const newString1="   as   "
 console.log(newString1)  //   as  -it will print the spaces

console.log(newString1.trim()); //as  -it is used to remove the space


//puchna hai


const url="http://anchl1.com/anchl"
console.log(url.replace('anchl','-'))   //http://-1.com/anchl

console.log(url.includes('aman'))   //it will search the keyword in url and return the boolean result

//if i want to convert in value in array
console.log(gameName.split('-'));
