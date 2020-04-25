function rev1(str){                                  //this is the long method, creating the function 
    const rev= []

    for(let i=str.length-1 ; i>=0 ; i--){
        rev.push(str[i])
    }

    rev_final=[]
    rev_final=rev.join('')
    // console.log(rev)
    console.log(rev_final)
}

function rev2(str){                                 // this is using the inbuilt function of reverse 
    
    rev_final=[]
    rev_final= str.split('').reverse().join('')
    console.log(rev_final)
}

const rev3= str => str.split('').reverse().join(''); // this is using the const method, no need to create a function


rev1('vs code is pretty good')
rev2('hi my name is jaynil')
rev3('fuck you bitches')