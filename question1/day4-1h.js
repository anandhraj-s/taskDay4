let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let k = 5;
// Anonymous function
// let rottation = function (array,k) {
//     for (let j = 1; j <= k; j++){
//     let iArray = [];
// for (i in array) {
//     iArray.push(i)
        
// }
// let maxIndex = Math.max(...iArray)
// let removedNumber = array.pop()
// let insertNum = array.unshift(removedNumber)

// }
// return(array)

// }
// console.log(rottation(numbersArray,k))
// -------------------------------------------------------------
// IIFE


let rotation = ((array, value) => {
    // console.log(value)
    // console.log(array)
    for (i = 0; i < value; i++) {
        let remove = array.pop()
        array.unshift(remove)
        // console.log(array)
    }
    // console.log(array)
    return array
    
})(numbersArray,k);

console.log(rotation)





// -------------------------------------------------------------
// for (let i = 0; i < numbersArray.length; i++){
//     numbersArray.unshift(Math.max(numbersArray[i]))
//     console.log(numbersArray)
// }


// let sayHello = 'hello'
// let person = 'person'
// for (i = 1; i <=5; i++){
//     console.log(sayHello)



// }for (j = 1; j <=5; j++){
//     console.log(person)
// }