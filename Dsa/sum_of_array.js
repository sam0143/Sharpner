var arr=[1,2,3,4];
var sum=0;
var temp=0;
var result=[];
for(let i=0; i<arr.length; i++){
    sum+=arr[i];
    result[temp++]=sum;
}
console.log(result);
