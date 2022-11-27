function max_2d_array(arr){
    var max=0 ;
    for( var i=0; i<arr.length; i++){
        var sum=0;
        for( var j=0; j<arr[i].length;j++){
            sum+=arr[i][j];
        }
        max=Math.max(max,sum);
    }
    return max;
}
console.log(max_2d_array( [[1,5],[7,3],[3,5]]));