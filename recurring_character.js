// Given an array: [2,1,5,2,6,8,8,4,6]
// The function should return 2

// for, say the array: [1,1,3,4,4]
// the function should return 1

// for no recurring characters
// function should return undefined

//my array method, not working for some reason

// function rec(array) {
//     for(let i=0; i<array.length; i++) {  
//         for(let j= i+1; j<array.length; j++) {
//            if(array[i] == array[j]) {
//                return array[i];
//            }
//         }
//     }
//     return undefined;
// }

//method 2: implementing hash

function recurringCharacter (input) {
    let map = {};
    for(let i=0; i<input.length; i++) {
        if (map[input[i]] !== undefined) {
            x= input[i]
            return x;
        }
        else {
            map[input[i]] = i
        }
    }
    return undefined;
}

recurringCharacter([1,1,1])