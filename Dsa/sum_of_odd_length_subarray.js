var arr = [10,11,12];
var count = 0;
for(var i=0; i<arr.length; i++){
    for(var j=i ; j<arr.length; j++){
        if((i-j)%2 == 0){
            for(var k=i; k<=j; k++){
                count+=arr[k];
            }
        }
    }
}
console.log(count);