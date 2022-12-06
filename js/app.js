// Some data we can work with
console.log('array iterator methods')
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

console.log('Original Inventors', inventors)

//* =========================================================================================================
// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.

// ? The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// ? Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
// ? filter() does not mutate the array on which it is called


const bornIn1500s = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600)
// creates a new array. for every inventor in the original array, return only the inventors who meet this condition
// condition: year property must be greater than or equal to 1500 AND less than 1600
console.log('bornIn1500s', bornIn1500s)

//* =========================================================================================================
// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties.
//? The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//TODO Approach 1
const namesOne = inventors.map((inventor) => {
  return { first: inventor.first, last: inventor.last }
})

// map returns new array. created from results of executing a cb function on each element in the og array

//TODO Approach 2
const namesTwo = inventors.map((inventor) => (
  { first: inventor.first, last: inventor.last }
))

console.log('Names', namesTwo,)

//* =========================================================================================================
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest.
//? The sort() method sorts the elements of an array in place and returns the sorted array. 
//? An in-place algorithm updates its input sequence only through replacement or swapping of elements. 
//? transforms input using no auxiliary data structure.
//? Compare function Specifies a function that defines the sort order.

//? sort accepts a compare function, and elements in the array will be sorted based on what that function returns

//? if it returns a POSITIVE VALUE, A moves after B
//? if it returns a NEGATIVE VALUE, A moves before B

//todo Ascending: begins with smallest and ends with greatest
//todo Descending: begins with greatest and ends with smallest 

//? if the compare function returns a value greater than 0, b goes before a
//? if the compare function returns a value less than 0, a goes before b

// 0: {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955}
// 1: {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727}

const sortedBirthdays = inventors.sort((a, b) => a.year - b.year) // ascending order

console.log('sortedBirthdays', sortedBirthdays)

//* =========================================================================================================
// 4. Sort the inventors by years lived from shortest to longest-lived.
//? The sort() method sorts the elements of an array in place and returns the sorted array. 

// const lifespan = inventors.slice().sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
const lifespan = inventors.slice().sort((a, b) => (a.passed - a.year) - (b.passed - b.year))

console.log('Life span, short to long', lifespan)

//* =========================================================================================================
// Array.prototype.reduce()
// 5. Find how many years all the inventors lived combined.
//? The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. 
//? Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.
//Todo Example: array1.reduce((previousValue, currentValue) => previousValue + currentValue)

const totalYearsLived = inventors.reduce(
  (prevYears, inventor) => prevYears + (inventor.passed - inventor.year), 0
)


// If initialValue is not specified, previousValue is initialized to the first value in the array, 
// and currentValue is initialized to the second value in the array.

console.log('Total Years Lived', totalYearsLived) //=> 861

//* =========================================================================================================
const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
//? The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//? SORT: The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.


// returns new array, created from results of executing a cb function on each element in the og array

const formattedNames = people.map((person) => {
  const personArr = person.split(', ') // => [ 'Becker', 'Carl' ] (name divided by a comma and space, look for this thing, divide there)
  const revName = personArr.reverse() // => [ 'Carl', 'Becker' ]
  const formatted = revName.join(' ') // => 'Carl Becker'
  return formatted
})

// returns a new array
// it accepts a callback function, executes that callback on every element of the array
//


console.log('Formatted names', formattedNames)

//* =========================================================================================================
const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items.
// Hint: Return an object where the keys are 'car', 'truck', etc., and the value is the total number of times each data item appears.
//? The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. 
//? Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.

//? const vehicles = data.reduce((acc, vehicle) => {
//?   acc[vehicle] = acc[vehicle] ? acc[vehicle] + 1 : 1
//?   return acc;
//? }, {})

const vehicles = data.reduce((obj, vehicle) => {
  if (obj[vehicle]) obj[vehicle]++ // if this key exists, increment the value by one
  if (!obj[vehicle]) obj[vehicle] = 1 // if the key does not exist, we add the value and assign it a value of 1
  return obj // return the object (the reduced output)
}, {}) // initialValue => normally 0, need to initialize and empty object

//? 1. Using dot notation:
//? obj.key3 = "value3";

//? 2. Using square bracket notation:
//? obj["key3"] = "value3";

//? The first form is used when you know the name of the property. 
//? The second form is used when the name of the property is dynamically determined.

console.log('Vehicles', vehicles) // => { car: 5, truck: 3, bike: 2, walk: 2, van: 2 }

//* =========================================================================================================
const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

// Array.prototype.some()
// 8. Check if at least one person is 19 or older.
//? The some() method tests whether at least one element in the array passes the test implemented by the provided function.
//? It returns a Boolean value.

const someOver19 = devs.some((dev) => 2022 - dev.year >= 19)

console.log('someOver19', someOver19) // true
//* =========================================================================================================
// Array.prototype.every()
// 9. Check if everyone is 19 or older.
//? The every() method tests whether all elements in the array pass the test implemented by the provided function. 
//? It returns a Boolean value.

const allOver19 = devs.every((dev) => 2022 - dev.year >= 19)

console.log('allOver19', allOver19) // false


//* =========================================================================================================
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423.
//? The find() method returns the value of the first element in the provided array that satisfies 
//? the provided testing function. If no values satisfy the testing function, undefined is returned.

const foundComment = comments.find((comment) => comment.id === 823423) //returns object
console.log('Found Comment:', foundComment) // output: { text: 'Super good', id: 823423 } 

//* =========================================================================================================
// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523.

//? The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
//? Otherwise, it returns -1, indicating that no element passed the test.

//! Be sure to access the id property of the comment object. 

const foundIndex = comments.findIndex((comment) => comment.id === 123523)
console.log('Found Index:', foundIndex) // output: 3


let find = comments.find(({ id }) => id === 123523)
console.log(find)

// let found = comments.find(({ id }) => id === 823423)
// console.log(found)


