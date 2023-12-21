// arrrow function
let string = ["mech", "civil", "electrical", "computer science"];        

let toUpperCase = (array) => {
    // console.log(array)
    for (index in string) {
        let word = array[index]
        let firstUpercase = word.charAt(0).toUpperCase() + word.slice(1)
        console.log(firstUpercase)
    }
}
toUpperCase(string)