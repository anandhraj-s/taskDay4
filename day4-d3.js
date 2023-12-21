let prime = [];
let notprime = [];

number = 15;


if (2 < number) {
    for (let i = 2; i < number; i++){
        if (number % i === 0) {
            return false
        }
        return true
    }
    
}
console.log()



    

// isprime(17)


// isprime = function (number) {
//     if (number > 2) {
//         for (i = 2; i < number; i++){
//             if (number % i == 0) {
//                 prime.push(number)
//                 return false
//             }
//             else {
//                 prime.push(number)
//                 return true
//             }
//         }
//     }
//     console.log(prime)
// }

// isprime(17)