// *-----Chapter 38-42 Functions-----*

// ==== Question 1 =====

// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// let base = parseInt(prompt("Enter the base value (a):"));
// let exponent = parseInt(prompt("Enter the exponent value (b):"));

// console.log("Result:", power(base, exponent));

// ==== Question 2 =====

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return year + " is a leap year.";
//     } else {
//         return year + " is not a leap year.";
//     }
// }

// let year = parseInt(prompt("Enter a year:"));
// console.log(isLeapYear(year));

// ==== Question 3 =====

// function calculateS(a, b, c) {
    
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
    
//     let S = calculateS(a, b, c);
    
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// function mainFunction() {
//     let a = parseFloat(prompt("Enter the length of side a:"));
//     let b = parseFloat(prompt("Enter the length of side b:"));
//     let c = parseFloat(prompt("Enter the length of side c:"));

//     if (a + b > c && a + c > b && b + c > a) { 
//         let area = calculateArea(a, b, c);
//         alert("The area of the triangle is: " + area.toFixed(2));
//     } else {
//         alert("Invalid triangle sides!");
//     }
// }

// mainFunction();

// ==== Question 4 =====

// function average(marks1, marks2, marks3) {
//     // Average calculate kar rahe hain
//     return (marks1 + marks2 + marks3) / 3;
// }

// function percentage(marks1, marks2, marks3) {
//     // Total marks 300 hain (3 subjects x 100 each)
//     let totalMarks = 300;
//     let obtainedMarks = marks1 + marks2 + marks3;
//     // Percentage calculate kar rahe hain
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//     // User se marks input lena
//     let marks1 = parseFloat(prompt("Enter marks for Subject 1 (out of 100):"));
//     let marks2 = parseFloat(prompt("Enter marks for Subject 2 (out of 100):"));
//     let marks3 = parseFloat(prompt("Enter marks for Subject 3 (out of 100):"));

//     // Average aur percentage calculate karna
//     let avg = average(marks1, marks2, marks3);
//     let perc = percentage(marks1, marks2, marks3);

//     // Results show karna
//     alert("Average Marks: " + avg.toFixed(2));
//     alert("Percentage: " + perc.toFixed(2) + "%");
// }

// mainFunction();

// ==== Question 5 =====

// function customIndexOf(str, char) {
    
//     for (let i = 0; i < str.length; i++) {
//               if (str[i] === char) {
//             return i;
//         }
//     }
    
//     return -1;
// }

// let inputString = prompt("Enter a string:");
// let inputChar = prompt("Enter a character to find:");
// let result = customIndexOf(inputString, inputChar);

// if (result !== -1) {
//     alert("Character found at index: " + result);
// } else {
//     alert("Character not found!");
// }

// ==== Question 6 =====

// function removeVowels(sentence) {
//     let result = ""; 

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];
        
//         if (!"aeiouAEIOU".includes(char)) {
//             result += char;
//         }
//     }

//     return result;
// }

// let userSentence = prompt("Enter a sentence (max 25 characters):");

// if (userSentence.length <= 25) {
//     let filteredSentence = removeVowels(userSentence);
//     alert("Sentence without vowels: " + filteredSentence);
// } else {
//     alert("Sentence is too long! Please enter up to 25 characters.");
// }

// ==== Question 7 =====

// function countSuccessiveVowels(text) {
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i].toLowerCase();
//         let nextChar = text[i + 1].toLowerCase();

//          switch (currentChar + nextChar) {
//             case "aa":
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":
//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":
//             case "eu":
//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":
//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":
//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":
//                 count++;
//                 break;
//         }
//     }

//     return count;
// }
// let userInput = prompt("Enter a sentence:");
// let result = countSuccessiveVowels(userInput);
// alert("Number of successive vowels: " + result);

// ==== Question 8 =====

// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }

// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }

// let distanceKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));


// alert("Distance in Meters: " + toMeters(distanceKm));
// alert("Distance in Feet: " + toFeet(distanceKm));
// alert("Distance in Inches: " + toInches(distanceKm));
// alert("Distance in Centimeters: " + toCentimeters(distanceKm));

// ==== Question 9 =====

// function calculateOvertime(hours) {
//     if (hours > 40) {
//         var overtimeHours = hours - 40;
//         var overtimePay = overtimeHours * 12;
//         console.log("Overtime pay is: Rs. " + overtimePay);
//     } else {
//         console.log("No overtime pay.");
//     }
// }

// var totalHours = parseInt(prompt("Enter total working hours: "));
// calculateOvertime(totalHours);

// ==== Question 10 =====

// function calculateNotes(amount) {
//     if (amount % 100 !== 0) {
//         console.log("Please enter the amount in hundreds.");
//         return;
//     }

//     var hundredNotes = Math.floor(amount / 100); 
//     amount = amount % 100;

//     var fiftyNotes = Math.floor(amount / 50);
//     amount = amount % 50;

//     var tenNotes = Math.floor(amount / 10);

//     console.log("100 ke notes: " + hundredNotes);
//     console.log("50 ke notes: " + fiftyNotes);
//     console.log("10 ke notes: " + tenNotes);
// }

// var withdrawAmount = parseInt(prompt("Enter amount to withdraw (in hundreds): "));
// calculateNotes(withdrawAmount);
