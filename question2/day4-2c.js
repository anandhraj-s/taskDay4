let array = [2,4,6,8,10];
    //     // anonymous function
let sum = (a) =>{
    let sum = (a.reduce((a, b) => a + b));
    console.log(sum);

}
sum(array)
// ---------------------------------------------------------------



//     // IIFE

// ((a) => {
//     let sum = (a.reduce((a, b) => a + b));
//     console.log(sum);
// })(array)
// ---------------------------------------------------------------
    





// ((array1) => {
//     for (i = 0; i < array.length; i++) {
//         console.log(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//     }
// })(array);



// let a = 5;
// a = a + 5
// a+= a


// console.log(a)