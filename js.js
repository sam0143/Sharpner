// Call , Apply , Bind
var obj ={
    num : 3
};
var ObjFunction = function(a,b){
    return this.num + a + b;
} 
console.log(ObjFunction.call(obj,a,b));
console.log(ObjFunction.apply(obj,[a,b]));
var bond = ObjFunction.bind(obj);
console.log(bond(a,b));


// Print Age of the student
var Student = {
    age:20
}
function student(){
    return "Student Age is " + this.age;
}
console.log(student());


// Currying by using binding
// let multiply = function (x,y){
//     console.log(x*y); 
// }
// let multiplyByTwo = multiply.bind(this,5);
// multiplyByTwo(3);


//Currying by using Clouser
var multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

var multiplyByTwo = multiply(2);
multiplyByTwo(10);
