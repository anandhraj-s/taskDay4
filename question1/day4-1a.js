// 1(a)
let array = [7, 5, 2, 8, 4, 1, 3, 6, 11];
    // anonymous function
    let a = function(array) {
        console.log (array.filter(num => num % 2 == 1));
};
a(array);
// ---------------------------------------------------------------
// IIFE 

((array) =>{
    console.log(array.filter(num => num % 2 == 1));
}
)(array);
// ---------------------------------------------------------------
