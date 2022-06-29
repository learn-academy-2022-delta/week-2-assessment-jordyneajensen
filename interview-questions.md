# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is a placeholder for an argument to be passed through. A parameter allows for multiple arguments to pass through without the need to hard code a function, so a function remains reusable and custamizable. An argument is specific information that can be passed through a parameter to customize a function.
  An example would be:
  const dogBreeds (breedType) => {
    return `${breedType} are the smartest of all dogs.
console.log(dogBreeds(breedType)) and I can pass in the argument of Beagles for breedType here so it would say:
console.log(dogBreeds(Beagles)) to get the output: "Beagles are the smartes of all dogs."

In this example, breedType is a parameter that allows me to pass in any argument I want and in this case it is different breeds of dogs. 

  Researched answer: Arguments are the real values being passed into the function. Parameters are the name(s) listed in the definition of the function to import arguments.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The built in method .map() is a higher order function that takes in an array and returns a new array. I just started working with higher order functions and haven't committed to memory the predifined parameters yet. However, I have several resources bookmarked and would be happy to reach out after the interview with an appropriate response.

  Researched answer: The .map() method has the parameter of a function which takes in the parameters of current value, index, arr, as and .map also has another parameter of thisValue. Required parameters include function and current value.

  How I would write out this example so for a visual would be:
  array.map(function(currentValue, index, arr) thisValue)



3. What is the difference between map and filter?

  Your answer: While both map and filter are higher order functions in javascript, they do very different things. Map iterates over an array of elements and returns a new array without changing the original array. Filter evaluates whether the elements in an array meet certain conditions and returns a new subset array of elements that meet conditions. 

  Researched answer: Map creates a new array by transforming each element in an array individually and returning the results of the transformed elements as a new array. Filter creates an array by filtering through elements that don't evaluate to truthy and returning an array of filtered elements that do evaluate to truthy.



4. What is the difference between a function and a method?

  Your answer: A function is custumizable and reusable, whereas a method is specifying a predetermined behavior or action that is often used within a function to return the desired output. Functions can be recalled many times, but is usually something I would use within a function and not be able to call back on if I wanted too in a block of code. Instead, I would write a different function with the builtin method to use at that spot in the code depending on desired output and what was being needed in that instance where a built-in method was needed.

  Researched answer: A function is a block of code designed to perform a particular task. A method is an object property that has a function value. A function takes in parameters, arguments, conditional statements, has a name, and returns a value. A method has actions that can be used on objects. Functions are dynamic and can perform multiple tasks whereas methods perform a task.


5. What is object destructuring?

  Your answer: Object destructuring is a way of taking properties of an object and turning them into individual variables that are more accessible and easier to recall. This can be especially helpful if you are dealing with a large database and need to recall something specific within that database such as a a make, model, and year of a car. Another example would be pulling up a list of VIP client's email addresses instead of everyone's email address that is listed in the entire data base.

  Researched answer: Object destructuring allows us to extract data from an object and sets them into new distinct variables. You can also read multiple properties of an object in just one line.


// Please let me know if my examples were even remotely correct. I want to relate the content to real world examples, especially in interviews to show understanding of concepts if possible. If I'm off, I will pull back. 

6. STRETCH: What is hoisting in JavaScript?

  Your answer: While I have seen the word hoisting and recognize it, I would need to do a little bit more research to give you a proper definition. Would you mind if I reached out after the interview with an answer for you? 

  Researched answer:
 JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Doesn't matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: the mechanism in which one class inherits another class's methods and properties

2. React: is a Javascript library for creating user interface; React's primary goal is to minimize the bugs that occur when developers are building UIs.

3. React state: An object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.

4. React lifecycle methods: There are 3 phases of the react lifecycle in which you can monitor and manipulate: Mounting, Updating, Unmounting. 

5. DOM: stands for Document Object Model and is a programming interface for web documents;  It represents the page so that programs can change the document structure, style, and content.
 