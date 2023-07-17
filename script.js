 //Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 15;
if (q1test % 3 == 0){
   console.log ('True');
}   else {
    console.log('False');
   }
   if (q1test % 5 == 0){
    console.log ('True');
 }   else {
     console.log('False');
    }
if (q1test % 3 == 0 || q1test % 5 == 0){
        console.log ('True');
     }   else {
         console.log('False');
        }

//Add code here

//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

let year = 2024
if (year % 4 == 0 && year % 100 !=0){
    console.log (year  + " is a leap year. ");
} else if (year % 400 ==0) {
    console.log (year  +  "is not a leap year.");
}
  else {
    console.log (year  + "is not a leap year.");
  }
// let year = 2000;
// let year = 1900;
// let year = 2024;

//Add code here


//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

//Add code here
let i = 1;
while (i <= 100) {
if (i % 3 === 0 || i % 4 === 0) {
console.log(i);
}
i++;
