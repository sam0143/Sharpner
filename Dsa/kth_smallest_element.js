class Solution {
    kthSmallest(arr,l,r,k){
      //code here
      arr = arr.sort((a,b)=>{return a-b});
      return arr[k-1];
    }
  }
  