function factorial(n){
    let a=1;
    while(n > 1){
        a = a*n;
        n--;
    }
    return a;
}

factorial(4)