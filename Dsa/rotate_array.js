    var nums =[1,2,3,4,5,6,7]
    var k=3;
    let length = nums.length;
    let result=[...nums];
    for(var i=0; i<length; i++){
        let index=(i+k)%length;
        nums[index]=result[i];
    }
    console.log(nums);


// console.log(rotate_array([1,2,3,4,5,6,7],3)); 
