// function find_max_subarrar(arr){
    arr=[5,2,-4,-5, 3,-1,2,3,1];
    var max_sum = 0 ;
    for(let i=0; i<arr.length; i++){
        for(var j=i; j<arr.length; j++){
            var sum=0;
            for(var k=i; k<=j; k++){
                sum+=arr[k];
            }
            if(max_sum < sum){
                max_sum=sum;
            }
        }
    }
    console.log(max_sum);
// }