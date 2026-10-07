

let number = -15;

if (number > 0) {
    console.log("The number is Positive");
} else if (number < 0) {
    console.log("The number is Negative");
} else {
    console.log("The number is Zero");
}


// 2. Check Student Result

let score = 82;

if (score >= 75) {
    console.log("Excellent");
} else if (score >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 3. Find Student Grade

let percentage = 56;

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 75) {
    console.log("Grade B");
} else if (percentage >= 60) {
    console.log("Grade C");
} else if (percentage >= 35) {
    console.log("Grade D");
} else {
    console.log("Fail");
}


// 4. Find Age Group

let personAge = 17;

if (personAge < 13) {
    console.log("Child");
} else if (personAge < 20) {
    console.log("Teenager");
} else if (personAge < 60) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}


// 5. Calculate Electricity Bill

let consumption = 180;
let totalBill;

if (consumption <= 100) {
    totalBill = consumption * 2;
} else if (consumption <= 200) {
    totalBill = consumption * 3;
} else if (consumption <= 300) {
    totalBill = consumption * 5;
} else {
    totalBill = consumption * 7;
}

console.log("Electricity Bill =", totalBill);


// 6. Find the Largest of Three Numbers

let first = 45;
let second = 25;
let third = 35;

if (first > second && first > third) {
    console.log("First number is the largest");
} else if (second > first && second > third) {
    console.log("Second number is the largest");
} else {
    console.log("Third number is the largest");
}

