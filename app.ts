// Question # 01

var num1 : any= Number(prompt("Enter first number"));
let num2 : any=Number(prompt("Enter second number"));
if(num1 > num2){
    console.log("The greater number is = ", num1);
}
else if(num2 > num1){
    console.log("The greater number is = ", num2);
}
else{
    console.log("Enter a valid number");
}

// Question # 02

let n1 : any= Number(prompt("Enter first number"));
let n2 : any=Number(prompt("Enter second number"));
let n3 : any=Number(prompt("Enter third number"));
if(n1 > n2 && n1 > n3){
    console.log("The greater number is = ", n1);
}
else if(n2 > n1 && n2 > n3){
    console.log("The greater number is = ", n2);
}
else if(n3 > n1 && n2 < n3){
    console.log("The greater number is = ", n3);
}
else{
    console.log("Enter a valid number");
}

// Question # 03

let nu : any= Number(prompt("Enter a number"));
if (nu > 0){
    console.log("The number is positive");
}
else if(nu < 0){
    console.log("The number is negative");
}
else if(nu === 0){
        console.log("The number is zero");
}
else{
    console.log("Enter a valid number");
}

// Question # 04

let div : any= Number(prompt("Enter a number"));
if(div%5 == 0 && div%11 == 0){
    console.log("Number is divisible by 5 and 11");
}
else{
    console.log("Number is not divisible by 5 and 11");
}

// Question # 05

let va : any= Number(prompt("Enter a number"));
if(va%2 == 0){
    console.log("Number is even");
}
else if(va%2 != 0){
    console.log("Number is odd");
}
else{
    console.log("Invalid Number");
}

// Question # 06

let leap : any= Number(prompt("Enter a number"));
if(leap%4 == 0){
        console.log(leap, "is a leap year");
}
else{
    console.log(leap, "is not a leap year");
}

// Question # 07

let ch : any=prompt("Enter a character");
if(ch >= 'a' || ch <= 'z' || ch <= 'A' || ch <= 'Z'){
    console.log(ch, "Character is alphabet");
}
else{
    console.log(ch, "Character is not alphabet");
}

// Question # 08

let vo : any=prompt("Enter a character");
if(vo == 'a' || vo == 'e' || vo == 'i' || vo == 'o' || vo == 'u' || vo == 'A' || vo == 'E' || vo == 'I' || vo == 'O' || vo == 'U'){
    console.log(vo, "Character is vowel");
}
else{
    console.log(vo, "Character is not vowel");
}

// Question # 09

let x1 :any =prompt("Enter a Input");
if(x1 >= 0 || x1 <= 9){
    console.log(x1, "Input is digit");
}
else if(x1 >= 'a' && x1 <= 'z' || x1 >= 'A' && x1 <= 'Z'){
    console.log(x1, "Input is alphabet");
}
else{
    console.log("Input is a special character");
}

// Question # 10

let x2 :any =prompt("Enter a Input");
if(x2 >= 'a' && x2 <= 'z'){
    console.log(x2, "Input is in lower case");
}
else{
    console.log(x2, "Input is in upper case");
}

// Question # 11

let week :any =prompt("Enter a Input from 0 to 6", "0 for Sunday and 6 for Saturday");
if(week == 0){
    console.log("Sunday");
}
else if(week == 1){
    console.log("Monday");
}
else if(week == 2){
    console.log("Tuesday");
}else if(week == 3){
    console.log("Wednesday");
}
else if(week == 4){
    console.log("Thursday");
}
else if(week == 5){
    console.log("Friday");
}
else if(week == 6){
    console.log("Saturday");
}

// Question # 12

let month :any =prompt("Enter a month from 1 to 12");
if ( month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    console.log("This month contains 31 days");
}
else if(month == 4 || month == 6 ||month == 9 || month == 11){
    console.log("This month contains 30 days");
}
else{
    console.log("This month contains 28 or 29 days");
}

// Question # 13

let notes :any =prompt("Enter a number");

if(notes >= 5000){
    let z = Math.floor(notes/5000);
    console.log("5000 Notes = ",z );
    notes = notes%5000;
}
if( notes >=1000){
    let z = Math.floor(notes/1000);
    console.log("1000 Notes = ",z );
    notes = notes%1000;
}
if(notes >= 500){
    let z = Math.floor(notes/500);
    console.log("500 Notes = ",z );
    notes = notes%500;
}
if(notes >= 100){
    let z = Math.floor(notes/100);
    console.log("100 Notes = ",z );
    notes = notes%100;
}
if(notes >=50){
    let z = Math.floor(notes/50);
    console.log("50 Notes = ",z );
    notes = notes%50;
}
if(notes >=20){
    let z = Math.floor(notes/20);
    console.log("20 Notes = ",z );
    notes = notes%20;
}
if(notes >=10){
    let z = Math.floor(notes/10);
    console.log("10 Notes = ",z );
    notes = notes%10;
}

// Question # 14

let angle1 :any =Number(prompt("Enter first angle"));
let angle2 :any =Number(prompt("Enter second angle"));
let angle3 :any =Number(prompt("Enter third angle"));
let sum = angle1+angle2+angle3;
if(sum == 180){
    console.log("Triangle is valid");
}
else{
    console.log("Triangle is not valid");
}

// Question # 15

let side1 :any =Number(prompt("Enter first side"));
let side2 :any =Number(prompt("Enter second side"));
let side3 :any =Number(prompt("Enter third side"));

if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
    console.log("Triangle is not valid");
}
else{
    console.log("Triangle is valid");
}
    

// Question # 16

let x :any =Number(prompt("Enter first side"));
let y :any =Number(prompt("Enter second side"));
let z :any =Number(prompt("Enter third side"));

if (x == y && y == z){
    console.log("Equilateral Triangle");
}
else if (x == y || y == z || z == x){
    console.log("Isosceles Triangle");
}
else{
    console.log("Scalene Triangle");
}

// Question # 17

let a :any =Number(prompt("Enter first value"));
let b :any =prompt("Enter second value");
let c :any =Number(prompt("Enter third value "));

if (a == 0) {
    console.log("Invalid");
    console.log("Solution can't find");
}
let d : any = b * b - 4 * a * c;
let sqrt_val : any = Math.sqrt(Math.abs(d));
if (d > 0) {
            console.log("Roots are real and different \n" + "<br/>");
            console.log((-b + sqrt_val) / (2 * a) + "<br/>"
                         + (-b - sqrt_val) / (2 * a));
}
else if (d == 0) {
            console.log("Roots are real and same \n" + "<br/>");
              console.log(-b / (2 * a) + "<br/>"
                               + -b / (2 * a)) ;
        }
else {

    let z: any =-b / (2 * a) ;
    let zz : any = sqrt_val / (2 * a) ;
    let zzz : any = -b / (2 * a);
    let za : any = sqrt_val / (2 * a);

            console.log("Roots are complex \n");
            console.log( z + " + i" + zz + "\n"+zzz + " - i" + za) ;
}

// Question # 18

let pur : any = Number(prompt("Amount of purchase"));
let sale : any = Number(prompt("Amount of sale"));

if (x-y > 0){
    console.log("You are in profit with = ",pur-sale);
}
else{
    console.log("You are in loss with = ",sale-pur);
}

// Question # 19

let phy : any = Number(prompt("Enter marks of physics"));
let che : any = Number(prompt("Enter marks of chemistry"));
let bio : any = Number(prompt("Enter marks of biology"));
let math : any = Number(prompt("Enter marks of math"));
let com : any = Number(prompt("Enter marks of computer"));
let avg : any =(phy+che+bio+math+com)/5;

if(avg >= 90){
    console.log("You are awarded with A grade");
}
else if(avg >= 80){
    console.log("You are awarded with B grade");
}
else if(avg >= 70){
    console.log("You are awarded with C grade");
}
else if(avg >= 60){
    console.log("You are awarded with D grade");
}
else if(avg >= 40){
    console.log("You are awarded with E grade");
}
else{
    console.log("You are fail.Try next time.");
}

// Question # 20

let basic_salary : any = Number(prompt("Enter your basic salary"));
let gross_salary : any ;
let HRA : any = 0 ;
let DA : any = 0 ;
if(basic_salary <= 10000){
    DA = (20/100)*basic_salary;
    HRA =(80/100)*basic_salary;
    gross_salary = DA + HRA + basic_salary ;
    console.log("Gross Salary = ",gross_salary);
}
else if(basic_salary <= 20000){
    DA = (25/100)*basic_salary;
    HRA =(90/100)*basic_salary;
    gross_salary = DA + HRA + basic_salary ;
    console.log("Gross Salary = ",gross_salary);
}
else{
    DA = (30/100)*basic_salary;
    HRA =(95/100)*basic_salary;
    gross_salary = DA + HRA + basic_salary ;
    console.log("Gross Salary = ",gross_salary);
}

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