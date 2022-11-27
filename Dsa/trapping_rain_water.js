function trap(height){
    var result = 0 ;
    for(let i=1;i<height.length-1;i++){
        var left=height[i];
        for(var j=0;j<i;j++){
            left = Math.max(left,height[j]);
        }
        var right=height[i];
        for(j=j+1;j<height.length;j++){
             right = Math.max(right,height[j]);
        }
        result += Math.min(left,right)-height[i] ; 
    }
    return result ;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
