//unsolved...
function duplicate(array1){
    
    for(let i=0; i<=array1.length; i++){
        for(let j=0; j<=array1.length; j++){
            var answer=0
            if(array1[i]==array1[j+1]){
                answer=1
            }
            else{
                answer=0
            }
            
        }
    }
    if(answer==1){
        console.log('True')
    }
    else{
        console.log('False')
    }
}

array1 = [1,2,2,4,5]

duplicate(array1)
