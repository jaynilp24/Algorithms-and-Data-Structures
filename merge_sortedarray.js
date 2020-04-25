// to merge the sorted arrays into one array
// ex: arr1= [1,2,3,4] and arr2= [5,6,7,8]
// answer: arr_combined= [1,2,3,4,5,6,7,8]

function mergeSortedArray(array1, array2){

    var array_combine = array1.concat(array2)
    var array_combine = array_combine.sort(function(a, b){return a-b})
    console.log(array_combine)

}

array1= [3,1,5]
array2= [4,2]

mergeSortedArray(array1,array2)