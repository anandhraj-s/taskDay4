let array = [2,4,6,8,10];
    //     // anonymous function
let sum = function (a) {
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
 