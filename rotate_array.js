//unsolved.
function rotateArray(array1,n){
    // array2 = []
    // console.log('Original Array: ', array1)
    for(let i=0; i<=n; i++){
        var popped = array1.pop()
        array1.push(popped)
    }

    console.log('\nRotated Array: ', array1)
}

array = [1,2,3,4,5]
rotateArray(array,3)

