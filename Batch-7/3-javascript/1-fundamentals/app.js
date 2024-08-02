// alert("working");

//you can store information in variables

// DATAYPES
// there are two data types

// 1-primitive type
// 2-reference type / object type

//REFERENCE TYPE
// Accessed by reference Objects that are stored
// on the heap a pointer to a location in memory.

let store = [
  "aaa",
  123123123,
  true,
  null,
  undefined,
  Symbol("asdasd"),
  "bbb",
  "ccc",
  "ddd",
]; //Array

store = {
  a: 1,
  b: 2,
  c: 3,
}; //object literal / object

//console.log(store["c"]);

// console.log(store);
// console.log(store2);

//Primitive Type Variables
//store directly in the location the variable accesses stored on the stack.

//text/number/boolean/null/undefined/symbol

store = "something"; //string = text
store = 12345; // Number = number
store = true; // Boolean // 0 = false, 1 = true
store = false; // boolean
store = null; // null (khali hai)
store = undefined; // undefined
store = Symbol("values of symbol"); //symbol

// console.log(store);

//Primitive Vs Reference Type

//primitive example

let muzammil_marks = 100;
let musaddiq_marks = muzammil_marks;

musaddiq_marks = 90;

// console.log(muzammil_marks, "muzammil marks"); //100
// console.log(musaddiq_marks, "musaddiq_marks"); //90

//Reference Type Example

let muzammil_marks_obj = {
  marks: 100,
};
// let musaddiq_marks_obj = muzammil_marks_obj; //it will assign the reference if you change the variable it will also change the reference original variable
let musaddiq_marks_obj = { ...muzammil_marks_obj }; //spread opreator it will not assign reference it will create new copy of the object

musaddiq_marks_obj.marks = 90;

// console.log(muzammil_marks_obj.marks, "muzammil_marks_obj"); // 100
// console.log(musaddiq_marks_obj.marks, "musaddiq_marks_obj"); //90

const arrayOne = [1, 2, 3];
const arrayTwo = arrayOne;
// const arrayTwo = [...arrayOne]; //spread operator with square bracket
arrayTwo.push(4);

//expected
// console.log(arrayOne); // [1,2,3]
// console.log(arrayTwo); // [1,2,3,4]
//output
// console.log(arrayOne); // [1,2,3,4]
// console.log(arrayTwo); // [1,2,3,4]

//There are three types of variables
// 1-let
// 2-const
// 3-var

// {} = scope

//function name(){
//}

//let variable will work only inside of the scope
{
  let working = "aaa";
  // console.log(working, "working");
}

// console.log(working, "working"); //undefined

//constant variable
//it will also work only inside of the scope and we cannot change constant variables

{
  const coachingName = "Squad Coders dev";
  // console.log(coachingName);
}
// coachingName = "Dev Dev Dev"; //it will give you the assignment error

//var

//var will not work in scope except function scope

{
  var headphonename = "sony";
}
// console.log(headphonename); //sony;

// or

{
  var headphonename = "sony";
  // console.log(headphonename); //sony;
}

function name() {
  var playstation = "sony";
}

// console.log(playstation);

//developer say that we should not use var is javascript code

//1st prioty is const
//2nd is let

//javascript is case sensitive

//variables mein capital or small letter se faraq parta hai = case sensitive
let some = "123123";
let Some = "111";

// console.log(some, "some");
// console.log(Some, "Some");

//naming of variables
// letters,
// underscore,
// camelcase,
// pascal case

const asdasdasd = "aaaa"; //letters = (a to z and A to Z and 1 to 10)
const company12311212 = "aaaa";
const html_css_javascript_react_react_native = "course"; //underscore
const htmlCssJavascriptReactReactNative = "course"; //camel case
const HtmlCssJavascriptReactReactNative = "course"; //pascal case

//"" = double quote
//'' = single quote

//Type Conversion
// console.log(HtmlCssJavascriptReactReactNative);
// console.log(typeof HtmlCssJavascriptReactReactNative); //iski type kia hai

const mousePrice = "200";
// console.log(mousePrice, "mouse Price");
// console.log(typeof mousePrice, "type mouse"); //string

//convert string to number

// we will use parseInt for number
// console.log(parseInt(mousePrice), "convert string to number");
// console.log(typeof parseInt(mousePrice), "convert string to number");

//2nd method
let testing_variable = new Number("2");
testing_variable = new Number(true); // 1
testing_variable = new Number(false); // 0
testing_variable = new Number(null); // 0
testing_variable = new Number("hello"); // Nan = Not a Number
testing_variable = new Number([1, 2, 3, 4]); // Nan = Not a Number

testing_variable = parseFloat("2340.20");

// console.log(testing_variable, "testing_variable");

//String Methods

testing_variable = "this is string and string is equal to text";
testing_variable = new String(12121); // "12121"
testing_variable = new String(true); // "true"

//2nd method
let someVariable = 1;

testing_variable = someVariable.toString(); // "1"
testing_variable = (1222222).toString(); // "1"
testing_variable = "asdasd".toUpperCase(); // "ASDASD"

// Boolean methods

testing_variable = new Boolean(1); //true
testing_variable = new Boolean(0); //false
testing_variable = new Boolean(null); //false
testing_variable = new Boolean(""); //false
testing_variable = new Boolean("asdasd"); //true

// console.log(testing_variable, "testing_variable");
// console.log(typeof testing_variable, "testing_variable");

testing_variable = {
  name: "Muzammil",
  designation: "Senoir Developer",
  companyName: "Koderlabs",
};

//Console methods

// console.table(testing_variable);
// console.warn(testing_variable);
// console.error(testing_variable);
// console.info(testing_variable);
// console.log(testing_variable);

// you can use arthmetic operators in javascript
testing_variable = 5 + 5;
testing_variable = 5 - 5;
testing_variable = 5 / 5;
testing_variable = 5 % 5;
testing_variable = 5 * 5;

//Math Object

testing_variable = Math.PI; // 3.14
testing_variable = Math.E; // 3.14
// testing_variable = Math.round(2.5);

// The Math.floor() function returns the largest number less than or equal to a given number.

/*==================================
=            math floor            =
==================================*/
//for positive numbers
val = Math.floor(2.4); //2
val = Math.floor(2.3); //2
val = Math.floor(2.59); //2
val = Math.floor("2.3"); //2
val = Math.floor(2); //2

//for negative number
val = Math.floor(-2.4); //-3
val = Math.floor(-2.3); //-3
val = Math.floor(-2.5); //-3
/*=====  End of math floor  ======*/

testing_variable = Math.pow(8, 4); // 8 * 8 * 8 * 8
testing_variable = Math.min(1, 2, 1, 36, 3, 4, 5, 6, 7, 8, 9, 0); //return minimum value
testing_variable = Math.max(1, 2, 1, 36, 3, 4, 5, 6, 7, 8, 9, 0); //return maximum value
testing_variable = Math.random() * 20 + 1;
// console.log(testing_variable);

//String Concatination (text ko jorne ki bat hori hai)

const firstName = "Muzammil";
const lastName = "Mustaqeem";

const fullName = firstName + " " + lastName;

// console.log(fullName);
// const testString = 'Hello, World my name is \'Muzammil Mustaqeem and my age \'is 26';

//line break chahiye text mein

//\n = line break
// const testString =
// "Hello, World my name \n \n is'Muzammil Mustaqeem and my age 'is 26";

// const testString =
//   "Hello, World my name \n \n is'" + fullName + " and my age 'is 26";

// console.log(testString);
// Template Literal

// `` = back tag
// ${} = interpolation

// "asdfasdfasdfasdf " + variableName
// `asdfasdfasdfasdf ${variableName}`;
let testString = `Hello, World my name 

is'${fullName} and my age "is 26`;

testString = testString.concat(
  " new thing",
  " one more thing",
  " one more thing"
);

testString = testString.replace("26", "20");

//check exist text
// testString = testString.includes("Muzammil"); //true
// COMPARISON

const productName = "Briyani";
const customerLocation = "north karachi"; // string
const dummyLocation = 11; //number
let deliveryCharges = 0;

// == equal to

if (customerLocation == "orangi town") {
  deliveryCharges = 300;
} else if (customerLocation == "north karachi") {
  deliveryCharges = 90;
} else {
  deliveryCharges = 400;
}

console.log(customerLocation, "customer location");
console.log(productName, "customer location");
console.log(dummyLocation, "customer location");
console.log(deliveryCharges, "customer location");

// console.log(deliveryCharges, "delivery charges");

// === three equal to / it will check data type also

// console.log(typeof customerLocation); //string
// console.log(typeof dummyLocation); //number

if (customerLocation === dummyLocation) {
  deliveryCharges = 0;
}

// console.log(deliveryCharges, "delivery charges");
// console.log(testString, "testString");

//not equal to = !=

const mobile = "iphone";
// const mobile = "china";

if (mobile != "china") {
  // console.log("mobile is not from china");
} else {
  // console.log("your mobile is from china");
}

//not equal !== / so it will check the both type
const mobiletwo = 1;
if (mobiletwo !== "1") {
  // console.log("mobile two is working");
}

// GREATER OR LESS THAN

// > greater than
// < less than

// 8 > 10 // false
// 8 < 10 // true

let id = 100;

if (id < 40) {
  //false
  // console.log("correct");
} else {
  // console.log("in correct");
}

if (id > 40) {
  // console.log("CORRECT");
} else {
  // console.log("INCORRECT");
}

// LOGICAL OPERATORS

//&& AND = both condition should be true
//|| AND = one condition should be true

const laptop = "hp";
const ram = "4gb";

//dono condition true honi chahiye
if (laptop == "hp" && ram == "6gb") {
  // console.log("i will purchase this laptop");
} else {
  // console.log("i will not purchase this laptop");
}

//dono me se koi ek condition bi true hogi o true hai
if (laptop == "hp" || laptop == "dell") {
  // console.log("hp & dell is good brand for laptop");
} else {
  // console.log("not recommended");
}

//Ternary Operator

// single line if else condition

// "100" === 100 //false

if (id === 100) {
  // console.log("id is 100");
} else {
  // console.log("id is not 100");
}

//ternary operator example
// const condition =
// id === 100 ? console.log("id is 100") : console.log("id is not 100");

//multiple if else conditions

if (id == 101) {
  // console.log("101 is true");
} else if (id == 100) {
  // console.log("100 is true");
} else if (id == 102) {
  // console.log("102 is true");
} else if (id == 103) {
  // console.log("103 is true");
} else if (id == 104) {
  // console.log("104 is true");
} else if (id == 105) {
  // console.log("105 is true");
} else if (id == 106) {
  // console.log("106 is true");
} else if (id == 107) {
  // console.log("107 is true");
} else {
  // console.log("not match any conditions");
}

// you can define conditions without braces
if (id === 100) console.log("id is 100");
// if (id !== 100) console.log("id is not 100");

//switch statement

// const color2 = "red";
const color2 = "blue";

if (color2 == "red") {
  console.log("color is red");
} else if (color2 != "blue") {
  console.log("color is blue");
} else {
  console.log("color is not blue nor red");
}

//it will also check data type
//and it will only work on equal to
switch (color2) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case color2 !== "blue":
    console.log("color is not blue");
    break;
  default:
    console.log("color is not blue nor red");
    break;
}

//Date Object

//it will get the date from your computer
let dateValue;
const today = new Date();
// console.log(today, "today");

// let birthday = new Date("9-10-1981");
// let birthday = new Date("November 27 1996"); //Month Date Year
// let birthday = new Date("11/27/1996"); //Month Date Year

// console.log(birthday);

dateValue = today.getMonth() + 1;
dateValue = today.getFullYear();
dateValue = today.getMinutes();
dateValue = today.getHours();
dateValue = today.getSeconds();
dateValue = today.getMilliseconds();
dateValue = today.getTime();

today.setMonth(1); // -1
today.setDate(2); // -1
today.setFullYear(1985);
today.setHours(3);
today.setMinutes(22);
today.setSeconds(25);

// console.log(dateValue, "date value");

// console.log(
//   `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`
// );

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
// console.log(today.getDay());
// console.log(day);

//Functions
//A function is simply a “chunk” of code that
//you can use over and over again, rather
//than writing it out multiple times.Functions
// enable programmers to break down or decompose
//a problem into smaller chunks, each of which performs a particular task.

function normalFunction() {
  console.log(`normal function`);
}

// normalFunction() //function call

//with parameter
function printMyName(name) {
  console.log(`My Name is ${name}`);
}

printMyName("Muzammil Mustaqeem");
printMyName("Fahad Uddin");
printMyName("Abdul Rehman");

//with multiple parameter
function printMyFullName(firstName = "", lastName = "") {
  console.log(`My Name is ${firstName} ${lastName}`);
}

printMyFullName("Muzammil", "Musaqeem");
printMyFullName(); // ""

//we can return things from functions

function checkCondition() {
  return false;
}
const checkConditionVariable = checkCondition();
// const checkConditionVariable = false;

// console.log(checkConditionVariable, "checkConditionVariable");

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

function normalFunction2() {
  console.log("console karado");
}

normalFunction2(); //call

//
//foran call hojata hai declate hote hi call karane ki need nai hai
const variableNeedHai = "one";
const variableNeedHai2 = "two";

// (function (firstVariable, secondVariable) {
//   console.log("foran console karado");
// })("one", "two");

//object
const simpleObject = {
  keyFirst: function () {
    console.log("Add Todo");
  },
  keySecond: function (id) {
    console.log(`edit this todo ${id}`);
  },
};

simpleObject.keyFirst();
simpleObject.keySecond(20);

//Closures

//Global = azad
let a = 4;
function myFunction() {
  return a * a;
}

// console.log(myFunction()); //16

//local scope
//scope = {}
function myFunction2() {
  let b = 4;
  return b * b;
}

// console.log(b); //undefined
// console.log(myFunction2());

//counter function

let counter = 0;

function add() {
  counter += 1;
}

add(); //1
add(); //2
add(); //3
add(); //4

counter = 1000;

add(); // 1001

//isko scope me kardete hein
function add2() {
  let counter = 0;
  return counter + 1;
}

add2(); //1
add2(); //1
add2(); //1
add2(); //1

//solve

//clouser
//iffe k function k andar function hoga
const add3 = (function () {
  let counter = 0;

  return function () {
    counter += 1; //short cut
    // counter = counter + 1; full form
    return counter;
  };
})();

add3(); //1
add3(); //2
add3(); //3

counter = 2999; //undefined
