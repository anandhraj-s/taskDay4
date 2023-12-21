// 1(b)
// let array = ["mech", "civil", "electrical", "computer science"];
//     // //     // anonymous function
//     let Capital = function (array) {
//         for(i = 0 ; i < array.length;i++)
//         console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1));
//     }
// Capital(array)
// ---------------------------------------------------------------
    


        // IIFE
let array1 = ["mech", "civil", "electrical", "computer science"];        
((array) => {
    for (i = 0; i < array.length; i++) {
        console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
})(array1);
// ---------------------------------------------------------------