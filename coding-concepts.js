// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer: This will return ["D", "e", "l", "t", "a", " ", "2", "0", "2", "2"]
// b) Verify and explain:
// Output: ['D', 'e', 'l', 't',
//          'a', ' ', '2', '0',
//          '2', '2'
//         ]
// The .split method splits a string into a an array of substrings of each character including spaces and special symbols and returns the new array without changing the original string. Some new information about this method is that the .split method can have parameters (separator,limit, segment, text qualifier). Separator can split a string into segments according to my understanding. Limit - limits the number of splits and excludes anything after the end of the number of splits has been reached. Segment allows you to extract specific segments of the string. Text qualifier - the character(s) that indicate the start and end of segments in text. Lots of information I had no idea about for the .split method that will probably come in handy with large chunks of data. Definitely going to keept this info handy. 




// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello Learn Student"
// b) Verify and explain: Output: undefined
//Verify: There is a function, which means it is running, however this function is missing the word return on line 27, to specify a value to return otherwise the default value is returned (undefined). To have the desired value output, we simply add return `Hello, ${name}!` 

//Please correct my understanding of this concept if wrong.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: 
//Output: [8, 10, 12, 14, 16]
//This is a higher order function using .map and implicit return to iterate over an array and multiply each element by 2 and return that new array. .map does not change the original array and its default value is undefined. If there is a single expression, arrow functions may implicitly return values.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: 
//Output: [11, 13, 15]
//Verify: If I was to verbalize this function, I would read it as, "The variable onlyOdds is equal to the array of [11, 12, 13, 14, 15]. Filter the values of each element to evaluate the array of onlyOdd numbers using modoluo 2 strict inequality to 0 and return the new array of filtered odd numbers." This is kind of reverse engineering by writing a prompt and/or pseudo code to explain what is happening to return [11, 13, 15]. 
// A little background: .filter is a higher order function that loops through an array and returns a new array with values that meet the conditions and returns a new subset of the array. If nothing meets the conditions, an empty array is returned []. In this example, we used a strict inequality to filter whether elements of the array met conditions for a new subset.

//I like trying to word things in different ways for myself, so some of this might sound a little redundant. Honestly, researching these concepts, analyzing the information, and then synthezing is how I start to truly get a grasp on these concepts.

// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript"
// b) Verify and explain:
// Output: Javascript
// Verify: Here, we are following the pathway of an object that has key: value pairs and some of those values are arrays. The console.log's first thing it is calling on is the object's name of myCodingSkills, then it tells us to go follow the path to the key of languages, and the very last little detail the at the end of the console.log statement is [0] refering to the 0-base location of the array, which is the value part of the pair in the object, that gives us "Javascript". In myCodingSkills, languages: ["JavaScript", "Ruby"], is a key: value pair where languages is the key and the array ["JavaScript", "Ruby"] os the value. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: "George"
// b) Verify and explain:
// Output: Learn { student: 'George', cohort: 'Bravo', year: 2022 }
// Explain: When passing in a parameter to a class, you will return a new object from the class. 
// Classes are blueprints for objects and dynamic. Classes are used to create objects. Classes are a function that contain both data and behavior.