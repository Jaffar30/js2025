// 27

// Section1///////////////////////////
// let js = "Amazing";
// if (js === 'Amazing' ) alert("JS is fun");
// console.log(40+8+23-10);
// Section1///////////////////////////

// Section2///////////////////////////
// let firstName = "Jaffar";
// const PI = 3.1415;
// console.log(firstName);
// Section2///////////////////////////

// Assignment Values and Variables////////////////////////////////////////
// let country = 'Bahrain',contienent = "Asia",population = 2;
// console.log(`Country:${country}-Contienent:${contienent}-Population:${population}`);
// Assignment Values and Variables///////////////////////////////////////////

// Section3///////////////////////////////////////////////////
// console.log(typeof false);
// Section3//////////////////////////////////////////////////

// Assignment Data Types
// let isIsland = false;
// let language;
// console.log(
//     `isIsland:${typeof isIsland}\n`+
//     `population:${typeof population}\n`+
//     `country:${country}\n`+
//     `language:${language}`
// );
// Assignment Data Types

// Section4
// let age = 30;
// age = 31;
// const birthYear = 1991;
// you can do this but its wrong : birthYear = 1990;
// also this is wrong dont use var : var job = 'programmer';
// Section4


// Assignment let, const and var
// let language = 'Arabic';
// const country = "Bahrain";
// const contienent = "Asia";
// let population = 2;
// const isIsland = false;
// Assignment let, const and var

// Section5
// operator allow you to transfer values or combine mutliple values
// const now = 2037;
// const ageJaffar = now - 2002;
// const ageAli = now - 2005;
// console.log(ageJaffar,ageAli);
// console.log(ageJaffar*2,ageJaffar/10,ageJaffar**3);
// const firstName = "Jaffar";
// const lastName = "Ahmed";
// console.log(firstName+" "+lastName);
// Section5

// Assignment Basic Operators
// const country = "Bahrain";
// const contienent = "Asia";
// const language = "Arabic";
// let population = 2;
// let firstHalf = population/2;
// let secondHalf = population/2;
// console.log(++population);
// let finlandPopulation = 6;
// console.log("is my country has more population than finland ? :",population>finlandPopulation);
// let averagePopulation = 33;
// console.log("is my country has less population that average ? :",population<averagePopulation);
// const description = `${country} is in ${contienent}, and its ${population} people speak ${language}`;
// console.log(description);
// Assignment Basic Operators

// Section6
// let x,y;
// x=y=25-10-5;
// console.log(x,y);
// Section6

// Section7
// const firstName = "Jaffar";
// const job = "teacher";
// const birthYear = 2002;
// const year = 2037;
// const jaffar = `I'm ${firstName}, a ${year-birthYear} years old ${job} !`;
// console.log(jaffar);
// Section7

// Assignment strings and template literals
// already used it before in my assignment
// Assignment strings and template literals

// Section8
// const age = 18;
// const isOldEnough = age > 17;
// console.log(isOldEnough);

// if(isOldEnough){
//     console.log("Old Enough");
// }else if(age === 17){
//     console.log("Almost 18");
// }else{
//     console.log("Your a child");
// }
// Section8

// Assignment taking decisions: if / else statements
// const country = "Bahrain";
// const contienent = "Asia";
// const language = "Arabic";
// let population = 2;
// let averagePopulation = 33;
// console.log(`${country}'s population is ${Math.abs(averagePopulation - population)} million ${(averagePopulation>population && "below") || "above"} the average`);
// // Assignment taking decisions: if / else statements

// Section9
// type conversion and coercion
// if there a string and + always concat the string
// if there is a string and - , * , / always do math operations
// I think the only exception is the +
// NaN : Not a number its a number but its an invalid number 😵‍💫
// const inputYear = '1991';
// console.log(inputYear+18);
// console.log(18+inputYear);
// console.log(Number(inputYear));
// console.log(Number(inputYear)+18);
// console.log(Number("Jaffar"));
// console.log(typeof NaN);
// console.log(String(23));
// console.log("I am "+23+" years old");
// console.log("23"-"10"-3);
// console.log("23"-"10");
// console.log("23"-"2");
// console.log("2332"-"2");
// console.log("10"-3);
// console.log("333"-3);
// console.log("Jaffar"-3);
// console.log("23"*2);
// console.log("10"/2);
// console.log("10"/"2");
// Section9

// Assignment type conversion and coerscion
// 4
// 617
// 23
// false
// 1143
// Assignment type conversion and coerscion

// Section10
// Truthy and Falsy values
// falsy values are not false but when you convert them they gonna be false
// falsy values(5) : [0],[""],[undefined],[null],[NaN]and honrable mension false it self 
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean({}));
// console.log(Boolean([]));
// Section10

// Section11
// == just equsl 2 and '2' true vs === must equal and value same so 2 and 2 true , 2 and "2" false
// const favorate = Number(prompt("What is your favorate number ?"))
// console.log(favorate);
// Section11

// Assignment Equality Operators:  == vs. ===
// let numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
// while(numNeighbours === NaN || (!numNeighbours && numNeighbours != 0) ){
//     numNeighbours = Number(prompt('Invalid Input enter only a number please :'));
// }
// if(numNeighbours === 1){
//     console.log("Only 1 border!");
// }else if(numNeighbours > 1){
//     console.log("More than 1 border");
// }else{
//     console.log('No borders');
// }
// Assignment Equality Operators:  == vs. ===

// Section12
// already know
// Section12

// Section13
// already know
// Section13

// Assignment logical operators
// already know
// Assignment logical operators

// Section14
// Switch statement
// switch use strict equality
// const day = 'friday';
// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }
// Section14

// Assignment the switch statement
// already know
// Assignment the switch statement

// Section15
// theory
// differant between exprecsions and statement
// expresions produce value while statements make decisions not value by themselfs
// Section15