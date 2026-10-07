
// 1. Check whether the given number is Positive or Negative

let number = -10;

if (number >= 0) {
    console.log("Given number is Positive");
} else {
    console.log("Given number is Negative");
}


// 2. Check whether the number is Even or Odd

let number1 = 17;

if (number1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 3. Guess whether addition of two numbers is Even or Odd
// Without actually adding the numbers

let a1 = 20;
let a2 = 35;

if (
    (a1 % 2 === 0 && a2 % 2 === 0) ||
    (a1 % 2 !== 0 && a2 % 2 !== 0)
) {
    console.log("The addition result would be Even");
} else {
    console.log("The addition result would be Odd");
}


// 4. Check whether the given triangle is a Right-Angle Triangle

let t1 = 3;
let t2 = 4;
let t3 = 5;

if (
    t1 ** 2 + t2 ** 2 === t3 ** 2 ||
    t2 ** 2 + t3 ** 2 === t1 ** 2 ||
    t1 ** 2 + t3 ** 2 === t2 ** 2
) {
    console.log("Given sides form a Right-Angle Triangle");
} else {
    console.log("Given sides do not form a Right-Angle Triangle");
}


// 5. Check whether the given year is a Leap Year or not

let year = 2100;

if (
    year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)
) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// 6. Check whether the quadratic equation has Real or Imaginary roots
// q1*x**2 + q2*x + q3 = 0

let q1 = 1;
let q2 = 10;
let q3 = 25;

let q_ex = q2 ** 2 - (4 * q1 * q3);

if (q_ex >= 0) {
    console.log("Equation has Real Roots");
} else {
    console.log("Equation has Imaginary Roots");
}
