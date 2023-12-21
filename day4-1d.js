

let Array = [
   1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
  13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
  73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100
];
    let prime = [];
    let notPrime = [];
// Anonymous function 
let isPrime = function (array) {
    
    for (number of array) {
        
        if (number < 1) {
           result =  notPrime.push(number)
            return false
        }
        else if (number == 2) {
            prime.push(number)
            return true
        } else if(number<2) {
            for (let i = 2; i<=Math.sqrt(number); i++) {
                if (number % i === 0) {
                    notPrime.push(number)
                    return false
                }
                prime.push(number)
                return true                
            }
            
        }
        // console.log(`prime = ${prime}`, `notprime = ${notPrime}`)
        // console.log(number)
        // console.log(prime)
        

    }
    console.log(prime)
    console.log(number)
    
}
isPrime(Array)



// let primeArray = [];
// let notPrimeArray = [];
// let isPrime = function (array) {
//     for (let i = 0; i < array.length; i++){
//         if (array[i] < 2) {
//             for (let j = 2; j < array[i]; j++){
//                 if (array[i] % j !== 0) {
//                     primeArray.push(array[i])
//                 } else {
//                     notPrimeArray.push(array[i])
//                 }
//             }
            
//         } else if (array[i]==2){
//             primeArray.push(array[i])
//         } else {
//             notPrimeArray.push(array[i])
//         }
//     } console.log('primeArray:',primeArray)
//     console.log('notprimeArray:',notPrimeArray)
    
// }
// isPrime(Array)


// console.log(primeArray)


// let isPrime = function (array) {
//     for (n of array) {
        
// let prime = [];
// let notPrime = [];
// if (n == 1) {
//     notPrime.push(n)
// }
// else if (n == 2) { 
//    prime.push(n)
// }
// else {
//     for (i = 2; i < n; i++){
//         if (n % i == 0) {
//             notPrime.push(n);
//             break;
//         } 
//         else {
//             prime.push(n);
//         } break;
//     }
// }

// // console.log(notPrime)
// console.log(prime)
//     }
    
// }
// isPrime(arrayOfNum)



























// // console.log(arrayOfNum)


// let isPrime = function (array) {
//     let primeArr = [];

// for (number of array) {
//     if (number == 1) {
//         console.log(number,"is not a prime number")
//     }
//     else if (number == 2) {
//         console.log(number,"is not a prime number")
//     }
//     else {
//         for (i = 2; i < number; i++){
//             if (number % i == 0) {
//                 console.log(number,'is not a prime number')
//             }
//             else {
//                 console.log(number,'is a prime number')
//             }
//         }
//     }
// }


// }

// isPrime (arrayOfNum)












// prime = function (arr) {
//     // console.log(arr)
//     for (value of arr) {
//         // console.log(value)
//         if (value == 1) {
//             return false;
//         } else if (value == 2){
//             return true;
//         } else {
//             for (let i = 0; i < value; i++){
//                 if (value % i == 0) {
//                     return false
//                 }
//             }
//             return true
//         }
//     }
//     let pNum = value
//     console.log(pNum)
// }


// prime(arrayOfNum)





// // for (i = 0; i < arrayOfNum.length; i++){
// //     let primenum = function (number) {
// //         console.log(number)

// //     }
// //     primenum(arrayOfNum[i])
// //  }



// let primenum = function (array) {

//     let primeArray = [];
//     for (let i = 0; i < array.length; i++){
//         for (let j = 2; j > array[i]; j++){
//             // if (number % j === 0) {
//             //     return primeArray.push(number)

//             console.log(j)
//             }
//         }


//     }
        

    
//     primenum(arrayOfNum)
 

// const arr = [34, 56, 3, 56, 4, 343, 68, 56, 34, 87, 8, 45, 34];
// const isPrime = n => {
//    if (n===1){
//    return false;
//    }else if(n === 2){
//       return true;
//    }else{
//       for(let x = 2; x < n; x++){
//          if(n % x === 0){
//             return false;
//          }
//       }
//       return true;
//    };
// };
// const filterPrime = arr => {
//    const filtered = arr.filter(el => isPrime(el));
//    return filtered;
// };
// console.log(filterPrime(arr));





//   if (number == 1) {
//         console.log(number,"is not a prime number 1")
//     }
//     else if (number == 2) {
//         console.log(number,"is not a prime number 2")
//     }
//     else {
//         for (i = 2; i < number; i++){
//             if (number % i == 0) {
//                 console.log(number[i],'is not a prime number between')
//             }
//             else {
//                 console.log(number[i],'is a prime number bw')
//             }
//         }
//     }


// let n = 11;
// let prime = [];
// let notPrime = [];
// if (n == 1) {
//     notPrime.push(n)
// }
// else if (n == 2) {
//    prime.push(n)
// }
// else {
//     for (i = 2; i < n; i++){
//         if (n % i == 0) {
//             notPrime.push(n);
//         } 
//         else {
//             prime.push(n);
//         } break;
//     }
// }

// console.log(notPrime)
// console.log(prime)