// to use strict mode
// must be the first statement in the file 
// comments is okay but code no
// secure code avoid accedentials errors
'use strict';

// section1
// let hasDriversLicense = false;
// const passTest = true;
// if(passTest) hasDriversLicense = true;
// if(passTest) hasDriverLicense = true;
// section1

// section2
// typeof function is a function bruuuh💀
// calling / running / invoking function
// function logger(){
//     console.log("My Name is Jaffar");
// }
// logger();
// const logger2 = function(){
//     console.log("My Name is Jaffar 2");
// }
// logger2();
// const logger3 = ()=> console.log("My Name is Jaffar 3");
// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(2002));
// logger3();
// console.log(typeof logger2);
// section2

// section3
// deleteral sentacs
// const friends = ['Ali','Ahmed','Hasan'];
// const years = new Array(1991,1984,2008,2020)
// for(let i=0; i<friends.length; i++){
//     console.log(friends[i]);
// }
// console.log(typeof friends);
// section3

// section4
// array methods
// push add elements to the end of an array : also return something the length of the new array
// add to the beggining of an array unsift also return the length of the new array
// pop remove last element in the array and return the element that get removed
// shift remove first element
// in which position a certain element is in the array
// indexOf("element")
// includes return true if element is in the array
// and false if not
// const friends = ['Ali','Ahmed','Hasan'];
// let x = friends.push("Jaffar");
// console.log(friends);
// console.log(x);
// let y = friends.unshift("John");
// let s = friends.pop();
// console.log(s);
// let t = friends.shift();
// console.log(friends.indexOf("Hasan"));
// console.log(friends.includes("Hasan"));
// section4

// section5
// objects  ---> key(properties) --- values
// Object Literal syntax
// const jaffar = {
//     firstName:"Jaffar",
//     lastName:"Ahmed",
//     age:2037-2002,
//     job:"Developer",
//     friends:["Ali","Hasan","Ahmed"]
// };
// console.log(jaffar['firstName']); 
// console.log(jaffar['name']);
// console.log(jaffar.lastName);
// section5

// section6
// object methods
const jaffar = {
    firstName:"Jaffar",
    lastName:"Ahmed",
    age:2002,
    job:"Developer",
    friends:["Ali","Hasan","Ahmed"],
    hasDriverLicense:true,
    calcAge:function(){
        return 2037-this.age
    },
    calc2Age:function(birthYear){
        return 2037-birthYear
    }
};

console.log(jaffar.calcAge());
console.log(jaffar["calc2Age"](jaffar['age']));
console.log("test");
console.log("test3");
// section6