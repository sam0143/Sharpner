var arr = [-1,0,3,5,9,12];
var target=9;
var i=0;
var j=arr.length-1;
    while(i <= j){
        var mid=Math.floor((i+j)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]<target){
            i=mid+1;
        }
        else if(arr[mid]>target){
            j=mid-1;
        }
    }
    return -1 ;
