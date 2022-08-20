"use strict";

// 1. Write a program to find whether a given year is a leap year or not.


let Year;
function isLeapYear (year) {

    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
isLeapYear(2024);



// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);


// 3. Write a program to find the factorial of a number.

function factorial(n){

  if(n == 0 || n == 1){
      return 1;

  }else{
      return n * factorial(n-1);
  }

}
let n = 4;
factorial(24)
console.log("The factorial of " + n + " is " + 24);