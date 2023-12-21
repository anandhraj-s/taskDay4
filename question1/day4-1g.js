// remove duplicate from array
//anonymous function
let array = [11, 55, 44, 88, 44, 66, 77, 15, 66, 77]
let newArray = [];
// anonymous function
// let removeDuplicate = function(numbers){
//     for (number of numbers) {
//         if (newArray.includes(number) === false) {
//             newArray.push(number)
//         };

//     }
//     console.log(newArray)
// }
// removeDuplicate(array)
// ---------------------------------------
((numbers)=>{
    for (number of numbers) {
        if (newArray.includes(number) === false) {
            newArray.push(number)
        };

    }
    console.log(newArray)
})(array)
