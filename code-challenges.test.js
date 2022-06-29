// ASSESSMENT 2: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("functionName", () => {
//   it("describes what my test and function does", () => {
//     expect(functionName("pass any params needed")).toEqual("Expect output")
//   })
// })

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.
//Pseudocode:
// Declare a function called multiplyByThree
// Set parameter to be array
// Use .map to iterate over the array
    // Multiply each value by 3
// Return our result


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleBy3", (num) => {
      it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
        const num1 = 15
        //Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"
        expect(divisbleBy3(num1)).toEqual("15 is divisible by three")
        expect(divisbleBy3(num2)).toEqual("0 is divisible by three")
        expect(divisbleBy3(num3)).toEqual("-7 is not divisible by three")
       })
     })
// ReferenceError: divisbleBy3 is not defined

// b) Create the function that makes the test pass.

const divisbleBy3 = (num) => {
    if(num % 3 === 0) {
        return `${num} is divisible by three`
    } else (num % 3 !== 0) 
        return `${num} is not divisible by three`
}
//  PASS  ./code-challenges.test.js
//   divisibleBy3
//   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

//Pseudocode:
// Declare a function called divisbleBy3
// Set parameter to num
// Use conditionals to with modulo to evaluate if each num is evenyly divisbly by 3
// Return our result


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


describe("capitalizeWords", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
     const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
     // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
     const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
     // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
      expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
   })

//  ReferenceError: capitalizeWords is not defined


// b) Create the function that makes the test pass.
//Pseudocode:
// Declare a function called capitalizeWords
// Set parameter to array
// Use .map to iterate over the words and use the .toUpperCase to capitolize
// Return result
// MAKE SURE DATA TYPE IS IN CORRECT SYNTAX!!!!!!!!!!!!!!!!!!!!! .MAP DOES NOT LIKE "STRINGS" WHEN REFERING TO AN ARRAY

const capitalizeWords = (arrayOfRandomNums) => {
    return arrayOfRandomNums.map(noun => {
     return noun.charAt(0).toUpperCase() + noun.substring(1).toLowerCase()
    })
}
// PASS  ./code-challenges.test.js
// divisibleBy3
// ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (2 ms)
// capitalizeWords
// ✓ takes in an array of words and returns an array with all the words capitalized

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.


describe("vowelIndex", () => {
     it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
       expect(vowelIndex(vowelTester1)).toEqual(1)
       expect(vowelIndex(vowelTester2)).toEqual(0)
       expect(vowelIndex(vowelTester3)).toEqual(2)
     })
   })

   //ReferenceError: vowelIndex is not defined

// b) Create the function that makes the test pass.

//---ATTEMPT #1
// Declare a function called vowelIndex
// Set parameter to stringOfVowelIndex
// Use index of to find the vowel and the index of the first vowel
// Return result



// const vowelIndex = (stringOfVowelTester) => {
//     return stringOfVowelTester.findIndex(i) (indexOfFirstVowel => {
//         if(indexOfFirstVowel === "a" || indexOfFirstVowel === "e" || indexOfFirstVowel === "i" ||indexOfFirstVowel === "o" || indexOfFirstVowel === "u") {
//         return indexOfFirstVowel[i]
//         }
//     })
// }
// ReferenceError: Cannot access 'vowelIndex' before initialization
//Currently getting this error.
//Needed to add quotes to "vowelIndex" in describe statement
//TypeError: stringOfVowelTester is not a function
//I changed the output numbers to have [] in expect statemnent.
//I moved findIndex() to end of string of vowel tester.
// ReferenceError: i is not defined
// I passed i in () after .findIndex but I think it should be a string but then I get stringVowelTester is not a funtion error
//I really wanted this higher order function to work but don't want to waste precious time forcing it too.



//------ATTEMPT #2
//Pseudocode:
/// Declare a function called vowelIndex
// Set parameter to stringOfVowelIndex
// Use index of to find the vowel and the index of the first vowel
// Iterate to look at each character in the string
// Conditional Statement to compare all vowels
// Return i

const vowelIndex = (stringOfVowelIndex) => {
   for(let i=0; i<stringOfVowelIndex.length; i++) {
    let indexOfFirstVowel = stringOfVowelIndex[i]
    if(indexOfFirstVowel === "a" || indexOfFirstVowel === "e" || indexOfFirstVowel === "i" ||indexOfFirstVowel === "o" || indexOfFirstVowel === "u")
    return i
   }
}

// vowelIndex
// ✓ takes in a string and logs the index of the first vowel

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total