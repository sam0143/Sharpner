var n=00000000000000000000000000001011;
var count=0;
for(var i=0; i<=31; i++){
    if(((n>>i)&1) == 1 ){
        count++
    }
}
console.log(count);