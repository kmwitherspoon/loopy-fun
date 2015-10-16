

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
  for(var i = 0; i < array.length; i++) {
    var a = array[i];
    console.log(a);
    callback(a);
  }
}


// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);

// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // .. do something with each element of args
    var total = 0;
    for(var i = 0; i < args.length ; i++ ) {
      total =  total + args[i];
    }
    return total;
}

sum(1,2,3,4,5);

console.assert( sum(1, 2, 3, 4, 5) === 15 )


// 2. calculate the average of numbers (returns the average (A NUMBER))


function average(){
     var args = [].slice.call(arguments);
     var total = 0,
        i;
    for (i = 0; i < args.length; i += 1) {
        total += args[i];
    }
    return total / args.length;
}

average(2, 4, 6, 8);

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // .. do something with each element of args
    var large = 0;
    for(i = 0; i < args.length; i++) {
      if(args[i] > large) {
        large = args[i];
      }
    }
    return large;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))



function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var length = 0;
    var longer = " ";
    for(i = 0; i < args.length; i++){
      if(args[i].length > length) {
        length = args[i].length;
        longer = args[i];
    }
}
    return longer;
};

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

var myArr = [1,2,3,4];
myArr.sort(function(a,b){
  return a - b;
});

console.assert( myArr[3]=== 4);

// .concat()

var people = ["boy", "girl", "man", "woman"];
var animals = ["dog", "cat", "horse", "fish"];

var animalsPeople = animals.concat(people);

console.log(animalsPeople);

console.assert(animalsPeople[4]=== "boy");

// .indexOf()

var animals = ["dog", "cat", "horse", "fish"];
var ani = animals.indexOf("dog");

console.log(ani);

console.assert(ani === 0);

// .split()

var nouns = "people, places, things"
var wordSplit = nouns.split(" ");

console.log(wordSplit);

console.assert(wordSplit[2]=== "things");

// .join()

var sentence = ["This", "is", "a", "sentence"]

var sentArr = sentence.join('+');

console.log(sentArr);

console.assert(sentArr === "This+is+a+sentence");

// .pop()

var sentence = ["This", "is", "a sentence"]
var popSent = sentence.pop();

console.log(popSent);

console.assert(popSent === "a sentence");

// .push()

var sentence = ["This", "is", "a sentence"]
var pushSent = sentence.push();

console.log(pushSent);

console.assert(pushSent === 3);


// .slice()

var animals = ["dog", "cat", "horse", "fish"];
var animalSlice = animals.slice(0,2);

console.log(animalSlice);

console.assert(animalSlice[0] === "dog");

// .splice()

var animals = ["dog", "cat", "horse", "fish"];
var removed = animals.splice(3,1);

console.log(removed);

console.assert(removed[0] === "fish");

// .shift()

var animals = ["dog", "cat", "horse", "fish"];
var aniShift = animals.shift();

console.log(aniShift);

console.assert(aniShift === "dog")

// .unshift()

var animals = ["dog", "cat", "horse", "fish"];
var aniUnshift = animals.unshift();

console.log(aniUnshift);

console.assert(aniUnshift === 4);

// .filter()

function isBigEnough(value) {
  return value >= 10;
}
var filtered = [22, 4, 10, 180, 34].filter(isBigEnough);

console.log(filtered);

console.assert(filtered[1] === 10);

// .map()

var numbers = [36, 25, 16];
var roots = numbers.map(Math.sqrt);

console.log(roots);

console.assert(roots[1] === 5);
