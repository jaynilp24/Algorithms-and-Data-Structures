function twoSum(array1,target){
    var answer = []
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array1.length; j++){
            var sum= array1[i]+array1[j]
            if(sum==target){
                if(i<j){
                    answer.push(i,j)
                }          
            }
        }
    }
    console.log(answer)
}

arr=[2,7,3,4,5,10,12,-1,0]
target=9
twoSum(arr,target)


