/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
const isItLong = (str) => {
  if (str.length > 20) {
return "That's a long string!"
  }
}

const isItMedium = (str) => {
  if (str.length === 10 || str.length === 20) {
return "That's a regular sized string!";
  } else if (str.length >= 10 && str.length <= 20) {
return "That's a regular sized string!";
  }
}

const isItShort = (str) => {
  if(str.length < 10) {
    return "That's a small string!";
  } else if (str.length > 10) {
    return "That's not a small string!";
  } else if (str.length === 10) {
    return "That's not a small string!";
  }
}

const howLongIsMyString = (str) =>{ if(str.length > 20) {
    return "That's a long string!";
  } else if (str.length === 20) {
    return "That's a regular sized string!";
  } else if (str.length >= 10 && str.length <= 20) {
    return "That's a regular sized string!";
  } else if (str.length < 10) {
    return "That's a small string!";
  }
}

const instructorHeight = (str) => {
  if (str === 'Colin') {
    return 62;
  } else if (str === 'Mesuara') {
    return 67;
  } else {
    return "I don't know that instructor!";
  }
}

// instructorHeight
//     ✕ should return 62 if given the string 'Colin' (1 ms)
//     ✕ should return 67 if given the string 'Mesuara'
//     ✕ should return "I don't know that instructor!" given any other argument. (1 ms)



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}