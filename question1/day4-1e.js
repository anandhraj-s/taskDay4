let array = ['apple', 'racar', 'cars', '12321', 'motors', 'malayalam'];

// // anonymous Function
// let polindrom = function (array) {
//     let polindromArray = [];

// for (word of array) {
//     let reverseWord = word.split('').reverse().join('');
//     if (word == reverseWord) {
        
//         polindromArray.push(reverseWord);
//     }
    

// }
// return polindromArray

    
// }
// // console.log(polindrom(array))
//  let result = polindrom(array)
// console.log(result)

// ---------------------------------------------------------

// iife function
 ((array)=> {
    let polindromArray = [];

    for (word of array) {
    let reverseWord = word.split('').reverse().join('');
        if (word == reverseWord) {
            
            polindromArray.push(reverseWord);
        }
    }

    console.log(polindromArray)

    
})(array)


// ----------------------------------------------------------------


