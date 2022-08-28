// Question # 01
var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));
if (num1 > num2) {
    console.log("The greater number is = ", num1);
}
else if (num2 > num1) {
    console.log("The greater number is = ", num2);
}
else {
    console.log("Enter a valid number");
}
// Question # 02
var n1 = Number(prompt("Enter first number"));
var n2 = Number(prompt("Enter second number"));
var n3 = Number(prompt("Enter third number"));
if (n1 > n2 && n1 > n3) {
    console.log("The greater number is = ", n1);
}
else if (n2 > n1 && n2 > n3) {
    console.log("The greater number is = ", n2);
}
else if (n3 > n1 && n2 < n3) {
    console.log("The greater number is = ", n3);
}
else {
    console.log("Enter a valid number");
}
// Question # 03
var nu = Number(prompt("Enter a number"));
if (nu > 0) {
    console.log("The number is positive");
}
else if (nu < 0) {
    console.log("The number is negative");
}
else if (nu === 0) {
    console.log("The number is zero");
}
else {
    console.log("Enter a valid number");
}
// Question # 04
var div = Number(prompt("Enter a number"));
if (div % 5 == 0 && div % 11 == 0) {
    console.log("Number is divisible by 5 and 11");
}
else {
    console.log("Number is not divisible by 5 and 11");
}
// Question # 05
var va = Number(prompt("Enter a number"));
if (va % 2 == 0) {
    console.log("Number is even");
}
else if (va % 2 != 0) {
    console.log("Number is odd");
}
else {
    console.log("Invalid Number");
}
// Question # 06
var leap = Number(prompt("Enter a number"));
if (leap % 4 == 0) {
    console.log(leap, "is a leap year");
}
else {
    console.log(leap, "is not a leap year");
}
// Question # 07
var ch = prompt("Enter a character");
if (ch >= 'a' || ch <= 'z' || ch <= 'A' || ch <= 'Z') {
    console.log(ch, "Character is alphabet");
}
else {
    console.log(ch, "Character is not alphabet");
}
// Question # 08
var vo = prompt("Enter a character");
if (vo == 'a' || vo == 'e' || vo == 'i' || vo == 'o' || vo == 'u' || vo == 'A' || vo == 'E' || vo == 'I' || vo == 'O' || vo == 'U') {
    console.log(vo, "Character is vowel");
}
else {
    console.log(vo, "Character is not vowel");
}
// Question # 09
var x1 = prompt("Enter a Input");
if (x1 >= 0 || x1 <= 9) {
    console.log(x1, "Input is digit");
}
else if (x1 >= 'a' && x1 <= 'z' || x1 >= 'A' && x1 <= 'Z') {
    console.log(x1, "Input is alphabet");
}
else {
    console.log("Input is a special character");
}
// Question # 10
var x2 = prompt("Enter a Input");
if (x2 >= 'a' && x2 <= 'z') {
    console.log(x2, "Input is in lower case");
}
else {
    console.log(x2, "Input is in upper case");
}
// Question # 11
var week = prompt("Enter a Input from 0 to 6", "0 for Sunday and 6 for Saturday");
if (week == 0) {
    console.log("Sunday");
}
else if (week == 1) {
    console.log("Monday");
}
else if (week == 2) {
    console.log("Tuesday");
}
else if (week == 3) {
    console.log("Wednesday");
}
else if (week == 4) {
    console.log("Thursday");
}
else if (week == 5) {
    console.log("Friday");
}
else if (week == 6) {
    console.log("Saturday");
}
// Question # 12
var month = prompt("Enter a month from 1 to 12");
if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log("This month contains 31 days");
}
else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("This month contains 30 days");
}
else {
    console.log("This month contains 28 or 29 days");
}
// Question # 13
var notes = prompt("Enter a number");
if (notes >= 5000) {
    var z_1 = Math.floor(notes / 5000);
    console.log("5000 Notes = ", z_1);
    notes = notes % 5000;
}
if (notes >= 1000) {
    var z_2 = Math.floor(notes / 1000);
    console.log("1000 Notes = ", z_2);
    notes = notes % 1000;
}
if (notes >= 500) {
    var z_3 = Math.floor(notes / 500);
    console.log("500 Notes = ", z_3);
    notes = notes % 500;
}
if (notes >= 100) {
    var z_4 = Math.floor(notes / 100);
    console.log("100 Notes = ", z_4);
    notes = notes % 100;
}
if (notes >= 50) {
    var z_5 = Math.floor(notes / 50);
    console.log("50 Notes = ", z_5);
    notes = notes % 50;
}
if (notes >= 20) {
    var z_6 = Math.floor(notes / 20);
    console.log("20 Notes = ", z_6);
    notes = notes % 20;
}
if (notes >= 10) {
    var z_7 = Math.floor(notes / 10);
    console.log("10 Notes = ", z_7);
    notes = notes % 10;
}
// Question # 14
var angle1 = Number(prompt("Enter first angle"));
var angle2 = Number(prompt("Enter second angle"));
var angle3 = Number(prompt("Enter third angle"));
var sum = angle1 + angle2 + angle3;
if (sum == 180) {
    console.log("Triangle is valid");
}
else {
    console.log("Triangle is not valid");
}
// Question # 15
var side1 = Number(prompt("Enter first side"));
var side2 = Number(prompt("Enter second side"));
var side3 = Number(prompt("Enter third side"));
if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    console.log("Triangle is not valid");
}
else {
    console.log("Triangle is valid");
}
// Question # 16
var x = Number(prompt("Enter first side"));
var y = Number(prompt("Enter second side"));
var z = Number(prompt("Enter third side"));
if (x == y && y == z) {
    console.log("Equilateral Triangle");
}
else if (x == y || y == z || z == x) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}
// Question # 17
var a = Number(prompt("Enter first value"));
var b = prompt("Enter second value");
var c = Number(prompt("Enter third value "));
if (a == 0) {
    console.log("Invalid");
    console.log("Solution can't find");
}
var d = b * b - 4 * a * c;
var sqrt_val = Math.sqrt(Math.abs(d));
if (d > 0) {
    console.log("Roots are real and different \n" + "<br/>");
    console.log((-b + sqrt_val) / (2 * a) + "<br/>"
        + (-b - sqrt_val) / (2 * a));
}
else if (d == 0) {
    console.log("Roots are real and same \n" + "<br/>");
    console.log(-b / (2 * a) + "<br/>"
        + -b / (2 * a));
}
else {
    var z_8 = -b / (2 * a);
    var zz = sqrt_val / (2 * a);
    var zzz = -b / (2 * a);
    var za = sqrt_val / (2 * a);
    console.log("Roots are complex \n");
    console.log(z_8 + " + i" + zz + "\n" + zzz + " - i" + za);
}
// Question # 18
var pur = Number(prompt("Amount of purchase"));
var sale = Number(prompt("Amount of sale"));
if (x - y > 0) {
    console.log("You are in profit with = ", pur - sale);
}
else {
    console.log("You are in loss with = ", sale - pur);
}
// Question # 19
var phy = Number(prompt("Enter marks of physics"));
var che = Number(prompt("Enter marks of chemistry"));
var bio = Number(prompt("Enter marks of biology"));
var math = Number(prompt("Enter marks of math"));
var com = Number(prompt("Enter marks of computer"));
var avg = (phy + che + bio + math + com) / 5;
if (avg >= 90) {
    console.log("You are awarded with A grade");
}
else if (avg >= 80) {
    console.log("You are awarded with B grade");
}
else if (avg >= 70) {
    console.log("You are awarded with C grade");
}
else if (avg >= 60) {
    console.log("You are awarded with D grade");
}
else if (avg >= 40) {
    console.log("You are awarded with E grade");
}
else {
    console.log("You are fail.Try next time.");
}
// Question # 20
var basic_salary = Number(prompt("Enter your basic salary"));
var gross_salary;
var HRA = 0;
var DA = 0;
if (basic_salary <= 10000) {
    DA = (20 / 100) * basic_salary;
    HRA = (80 / 100) * basic_salary;
    gross_salary = DA + HRA + basic_salary;
    console.log("Gross Salary = ", gross_salary);
}
else if (basic_salary <= 20000) {
    DA = (25 / 100) * basic_salary;
    HRA = (90 / 100) * basic_salary;
    gross_salary = DA + HRA + basic_salary;
    console.log("Gross Salary = ", gross_salary);
}
else {
    DA = (30 / 100) * basic_salary;
    HRA = (95 / 100) * basic_salary;
    gross_salary = DA + HRA + basic_salary;
    console.log("Gross Salary = ", gross_salary);
}
// Question # 21
var units = Number(prompt("Enter total units"));
var bill = 0;
if (units <= 50) {
    bill = (units * 0.50) + (units * 0.20);
    console.log("Total bill =", bill);
}
else if (units <= 150) {
    bill = (units * 0.75) + (units * 0.20);
    console.log("Total bill =", bill);
}
else if (units <= 250) {
    bill = (units * 1.2) + (units * 0.20);
    console.log("Total bill =", bill);
}
else {
    bill = (units * 1.5) + (units * 0.20);
    console.log("Total bill =", bill);
}
