
/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');
console.log(40+8+23-10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name convention
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas"
let PI = 3.14;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let country = "Canada";
let continent = "North America";
let population = "40 000 000"

console.log(country);
console.log(continent);
console.log(population);
*/ 
/*
let javascripIsFun = true;
console.log(javascripIsFun);

//console.log(typeof true);
console.log(typeof javascripIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');

javascripIsFun = 'YES';
console.log(typeof javascripIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// let age = 30;
// age = 31;

// const birthYear = 1991;
// //birthYear = 2000;

// var  job = 'programmer';
// job = 'teacher';

// lastName = 'Schmentmann';
// console.log(lastName);

// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2^3 = 2*2*2 = 8

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; // x = 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; 
// x--;
// console.log(x);

// // Comparision operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y)

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge); 

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = 'Jonas';
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a refular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines`);


// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start her dricing lincense 🍕");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years 🍟`);
// }

// const birthYear = 2004;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}
*/

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + ' years old.'); // + -> str
// console.log('23' - '10' - 3); // - -> number
// console.log('23' /  '2');

// let n = '1' + 1; // string '11'
// n = n - 1; // 11 - 1 = 10
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all :)");
// } else {
//     console.log("You should get a job!")
// }

// let height = 0;
// if (height) {
//     console.log ("Yay! Height is defined")
// } else {
//     console.log("Height is UNDEFINED")
// }

// const age = 18;
// if (age === 18) console.log("You just became a adult (strict)");

// if (age == 18) console.log("You just became a adult (loose)");

// const favourite = Number(prompt("What is your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//     console.log("7 is also a cool number");
// } else if (favourite === 9) {
//     console.log("9 is also a cool number");
// } else {
//     console.log("Number is not 7 or 23");
// }

// if (favourite !== 23) console.log("Why not 23?");

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if(hasDriversLicense && hasGoodVision) {
// //     console.log("Sarah is able to drive!");
// // } else {
// //     console.log("Someone else should drive.....");
// // }

// const isTired = false // C
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive.....");
// }

// const day = "friday";

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videoes');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday': 
//         console.log('Enjoy the Weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// }else if (day === 'tuesday'){
//     console.log('Prepare theory videoes');
// } else if (day === 'wednesday' || day === 'thursday'){
//     console.log('Write code examples');
// } else if (day === 'friday'){
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the Weekend');
// } else {
//     console.log('Not a valid day!');
// }


// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger';
// }
// const me = 'Jonas';
// console.log(`I'm ${2037 -1991} years old ${me}`);

// const age = 14;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine 🍷';
// } else {
//     drink2 =  'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

