var search = function(nums,target){
    var i=0,j=nums.length-1,mid;
    while(i<=j){
        mid=Math.floor((i+j)/2);
        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] <= target){
              i=mid+1;
        }
        else if(nums[mid] >= target){
              j=mid-1
        }
    }
    return -1;
}
console.log(search([-1,0,3,5,9,12],9));
console.log(search([-1,0,3,5,9,12],12));