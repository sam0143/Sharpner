function Selection_sort(arr){
    for(var i=0; i<arr.length; i++){
        var imax=i;
        for(var j=i+1; j<arr.length; j++){
            if(arr[j]>arr[imax])
                imax=j;
        }
            var temp=arr[i];
                arr[i]=arr[imax];
                arr[imax]=temp;
    }
    return arr;
}

console.log(Selection_sort([4,3,2,5,1]))