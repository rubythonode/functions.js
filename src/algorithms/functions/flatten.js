/**
 * @function Flatten/Merge two arrays
 * @param {*} arr 
 * @param {*} givenArr 
 */
const flatten = (arr, givenArr) => {
    arr.forEach((item) => {
      (Array.isArray(item)) && (flatten(item, givenArr));
      (!Array.isArray(item)) && (givenArr.push(item));
    });
  
    return givenArr;
}

module.exports = flatten