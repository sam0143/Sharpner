function print_prime(n){
    var primes = [];
    var temp=0;
    var isprime=2;
    while(temp<n){
        var flag=true;
        for(let i=2; i<isprime; i++){
            if(isprime % i == 0 ){
                flag = false;
                break;
            }
        }
        if(flag){
            primes[temp]=isprime;
            temp++;
        }
        isprime++;
    } 
    return primes;
}

console.log(print_prime(5));