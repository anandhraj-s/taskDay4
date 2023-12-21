let array = ['apple', 'racar', 'cars', '12321', 'motors', 'malayalam'];



// arrow function
 let findPolindrom = (array)=> {
    let polindromArray = [];

    for (word of array) {
    let reverseWord = word.split('').reverse().join('');
        if (word == reverseWord) {
            
            polindromArray.push(reverseWord);
        }
    }

    console.log(polindromArray)

    
}
findPolindrom(array)


// --------------------------------------------------------