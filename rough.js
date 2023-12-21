let array=[1,2,3,4,5,6,7] 
{
    let removed = array.pop()
    array.unshift(removed)
    console.log(array) 
    console.log(removed)
}

// console.log(array)