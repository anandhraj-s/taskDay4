// 1(a)
let array = [7, 5, 2, 8, 4, 1, 3, 6, 11];
// Arrow function

    
let odd = (numbers) =>{
    console.log(numbers.filter(num => num % 2 == 1));
}
odd(array);
