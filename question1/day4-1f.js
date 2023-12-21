let Array1 = [2, 5, 7, 9, 11, 15];
let Array2 = [4, 6, 8, 10, 12, 14];

// Anonymous Function
// let medianFun = function (arr1, arr2) {
//   let numbers = arr1.concat(arr2)
//   numbers.sort((a, b) => a - b)
//   let twoMedian = (numbers[((numbers.length / 2) - 1)]) + (numbers[(numbers.length / 2)])
//   let median = twoMedian / 2
//   return median
// }
// console.log(medianFun(Array1, Array2))
// ----------------------------------

// iife 
((arr1, arr2) => {
  let numbers = arr1.concat(arr2)
  numbers.sort((a, b) => a - b)
  let twoMedian = (numbers[((numbers.length / 2) - 1)]) + (numbers[(numbers.length / 2)])
  let median = twoMedian / 2
  console.log(median)
  return median
  })(Array1,Array2);


// -------------------------------------------------

