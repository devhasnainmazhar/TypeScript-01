// Question # 01

// var x : any= Number(prompt("Enter first number"));
// let y : any=Number(prompt("Enter second number"));
// if(x > y){
//     console.log("The greater number is = ", x);
// }
// else if(y > x){
//     console.log("The greater number is = ", y);
// }
// else{
//     console.log("Enter a valid number");
// }

// Question # 02

// let x : any= Number(prompt("Enter first number"));
// let y : any=Number(prompt("Enter second number"));
// let z : any=Number(prompt("Enter third number"));
// if(x > y && x > z){
//     console.log("The greater number is = ", x);
// }
// else if(y > x && y > z){
//     console.log("The greater number is = ", y);
// }
// else if(z > x && y < z){
//     console.log("The greater number is = ", z);
// }
// else{
//     console.log("Enter a valid number");
// }

// Question # 03

// let x : any= Number(prompt("Enter a number"));
// if (x > 0){
//     console.log("The number is positive");
// }
// else if(x < 0){
//     console.log("The number is negative");
// }
// else if(x === 0){
//         console.log("The number is zero");
// }
// else{
//     console.log("Enter a valid number");
// }

// Question # 04

// let x : any= Number(prompt("Enter a number"));
// if(x%5 == 0 && x%11 == 0){
//     console.log("Number is divisible by 5 and 11");
// }
// else{
//     console.log("Number is not divisible by 5 and 11");
// }

// Question # 05

// let x : any= Number(prompt("Enter a number"));
// if(x%2 == 0){
//     console.log("Number is even");
// }
// else if(x%2 != 0){
//     console.log("Number is odd");
// }
// else{
//     console.log("Invalid Number");
// }

// Question # 06

// let x : any= Number(prompt("Enter a number"));
// if(x%4 == 0){
//         console.log(x, "is a leap year");
// }
// else{
//     console.log(x, "is not a leap year");
// }

// Question # 07

// let x : any=prompt("Enter a character");
// if(x >= 'a' || x <= 'z' || x <= 'A' || x <= 'Z'){
//     console.log(x, "Character is alphabet");
// }
// else{
//     console.log(x, "Character is not alphabet");
// }

// Question # 08

// let x : any=prompt("Enter a character");
// if(x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U'){
//     console.log(x, "Character is vowel");
// }
// else{
//     console.log(x, "Character is not vowel");
// }

// Question # 09

// let x :any =prompt("Enter a Input");
// if(x >= 0 || x <= 9){
//     console.log(x, "Input is digit");
// }
// else if(x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z'){
//     console.log(x, "Input is alphabet");
// }
// else{
//     console.log("Input is a special character");
// }

// Question # 10

// let x :any =prompt("Enter a Input");
// if(x >= 'a' && x <= 'z'){
//     console.log(x, "Input is in lower case");
// }
// else ( x >= 'A' && x <= 'Z'){
//     console.log(x, "Input is in upper case");
// }

// Question # 11

// let x :any =prompt("Enter a Input from 0 to 6", "0 for Sunday and 6 for Saturday");
// if(x == 0){
//     console.log("Sunday");
// }
// else if(x == 1){
//     console.log("Monday");
// }
// else if(x == 2){
//     console.log("Tuesday");
// }else if(x == 3){
//     console.log("Wednesday");
// }
// else if(x == 4){
//     console.log("Thursday");
// }
// else if(x == 5){
//     console.log("Friday");
// }
// else if(x == 6){
//     console.log("Saturday");
// }

// Question # 12

// let x :any =prompt("Enter a month from 1 to 12");
// if ( x == 1 || x == 3 || x == 5 || x == 7 || x == 8 || x == 10 || x == 12){
//     console.log("This month contains 31 days");
// }
// else if(x == 4 || x == 6 ||x == 9 || x == 11){
//     console.log("This month contains 30 days");
// }
// else{
//     console.log("This month contains 28 or 29 days");
// }

// Question # 13

// let x :any =prompt("Enter a number");

// if(x >= 5000){
//     let z = Math.floor(x/5000);
//     console.log("5000 Notes = ",z );
//     x = x%5000;
// }
// if( x >=1000){
//     let z = Math.floor(x/1000);
//     console.log("1000 Notes = ",z );
//     x = x%1000;
// }
// if(x >= 500){
//     let z = Math.floor(x/500);
//     console.log("500 Notes = ",z );
//     x = x%500;
// }
// if(x >= 100){
//     let z = Math.floor(x/100);
//     console.log("100 Notes = ",z );
//     x = x%100;
// }
// if(x >=50){
//     let z = Math.floor(x/50);
//     console.log("50 Notes = ",z );
//     x = x%50;
// }
// if(x >=20){
//     let z = Math.floor(x/20);
//     console.log("20 Notes = ",z );
//     x = x%20;
// }
// if(x >=10){
//     let z = Math.floor(x/10);
//     console.log("10 Notes = ",z );
//     x = x%10;
// }

// Question # 14

// let x :any =Number(prompt("Enter first angle"));
// let y :any =Number(prompt("Enter second angle"));
// let z :any =Number(prompt("Enter third angle"));
// let sum = x+y+z;
// if(sum == 180){
//     console.log("Triangle is valid");
// }
// else{
//     console.log("Triangle is not valid");
// }

// Question # 15

// let a :any =Number(prompt("Enter first side"));
// let b :any =Number(prompt("Enter second side"));
// let c :any =Number(prompt("Enter third side"));

// if (a + b <= c || a + c <= b || b + c <= a){
//     console.log("Triangle is not valid");
// }
// else{
//     console.log("Triangle is valid");
// }
    

// Question # 16

// let x :any =Number(prompt("Enter first side"));
// let y :any =Number(prompt("Enter second side"));
// let z :any =Number(prompt("Enter third side"));

// if (x == y && y == z){
//     console.log("Equilateral Triangle");
// }
// else if (x == y || y == z || z == x){
//     console.log("Isosceles Triangle");
// }
// else{
//     console.log("Scalene Triangle");
// }

// Question # 17

// let a :any =Number(prompt("Enter first value"));
// let b :any =prompt("Enter second value");
// let c :any =Number(prompt("Enter third value "));

// if (a == 0) {
//     console.log("Invalid");
//     console.log("Solution can't find");
// }
// let d : any = b * b - 4 * a * c;
// let sqrt_val : any = Math.sqrt(Math.abs(d));
// if (d > 0) {
//             console.log("Roots are real and different \n" + "<br/>");
//             console.log((-b + sqrt_val) / (2 * a) + "<br/>"
//                          + (-b - sqrt_val) / (2 * a));
// }
// else if (d == 0) {
//             console.log("Roots are real and same \n" + "<br/>");
//               console.log(-b / (2 * a) + "<br/>"
//                                + -b / (2 * a)) ;
//         }
// else {

//     let z: any =-b / (2 * a) ;
//     let zz : any = sqrt_val / (2 * a) ;
//     let zzz : any = -b / (2 * a);
//     let za : any = sqrt_val / (2 * a);

//             console.log("Roots are complex \n");
//             console.log( z + " + i" + zz + "\n"+zzz + " - i" + za) ;
// }

// Question # 18

// let x : any = Number(prompt("Amount of purchase"));
// let y : any = Number(prompt("Amount of sale"));

// if (x-y > 0){
//     console.log("You are in profit with = ",x-y);
// }
// else{
//     console.log("You are in loss with = ",y-x);
// }

// Question # 19

// let a : any = Number(prompt("Enter marks of physics"));
// let b : any = Number(prompt("Enter marks of chemistry"));
// let c : any = Number(prompt("Enter marks of biology"));
// let d : any = Number(prompt("Enter marks of math"));
// let e : any = Number(prompt("Enter marks of computer"));
// let avg : any =(a+b+c+d+e)/5;

// if(avg >= 90){
//     console.log("You are awarded with A grade");
// }
// else if(avg >= 80){
//     console.log("You are awarded with B grade");
// }
// else if(avg >= 70){
//     console.log("You are awarded with C grade");
// }
// else if(avg >= 60){
//     console.log("You are awarded with D grade");
// }
// else if(avg >= 40){
//     console.log("You are awarded with E grade");
// }
// else{
//     console.log("You are fail.Try next time.");
// }

// Question # 20

// let basic_salary : any = Number(prompt("Enter your basic salary"));
// let gross_salary : any ;
// let HRA : any = 0 ;
// let DA : any = 0 ;
// if(basic_salary <= 10000){
//     DA = (20/100)*basic_salary;
//     HRA =(80/100)*basic_salary;
//     gross_salary = DA + HRA + basic_salary ;
//     console.log("Gross Salary = ",gross_salary);
// }
// else if(basic_salary <= 20000){
//     DA = (25/100)*basic_salary;
//     HRA =(90/100)*basic_salary;
//     gross_salary = DA + HRA + basic_salary ;
//     console.log("Gross Salary = ",gross_salary);
// }
// else{
//     DA = (30/100)*basic_salary;
//     HRA =(95/100)*basic_salary;
//     gross_salary = DA + HRA + basic_salary ;
//     console.log("Gross Salary = ",gross_salary);
// }

// Question # 21

let units : number = Number(prompt("Enter total units"));
let bill : number = 0 ;

if(units <= 50){
    bill = (units * 0.50) + (units * 0.20); 
    console.log("Total bill =",bill);
}
else if(units <= 150){
    bill = (units * 0.75) + (units * 0.20); 
    console.log("Total bill =",bill);
}
else if(units <= 250){
    bill = (units * 1.2) + (units * 0.20); 
    console.log("Total bill =",bill);
}
else {
    bill = (units * 1.5) + (units * 0.20); 
    console.log("Total bill =",bill);
}