console.clear();

function Fibonacci(n)
{
    let a=0, b=1, c=a+b;
    console.log('Here is the Fibonacci Series\n' + a + '\n' + b + '\n' + c);
    for(let i=0; i<=n; i++) 
    {
        a=b; b=c; c=a+b;
        console.log(c+ ' '); 
        a++;
    }

}

Fibonacci(12);
