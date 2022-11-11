
// function abc() {
//     console.log(a);
//     }
//     var a = 7;
//     abc();


// function abc() {
//     console.log(a);
//     } 
//     abc(); 
//     var a = 7;


// function outerfunction() {
//     console.log(a);
//     var c = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(b);
//     console.log(c);
//     }
// }
//     var a = 7;
//     var b =3
//     outerfunction();
    


// function outerfunction() {
//     console.log(a);
//     var a = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(a);
//     console.log(window.a);
//     console.log(this.a);
//     }
//  } 
//     var a = 7; 
//     var b =3
//     outerfunction();
    

// console.log(a)
// console.log(b);
// let a =5;
// var b =6;
// console.log(b);

// console.log(a);
// var a = 5;
// console.log(b);


// let a = 5;
// var b = 6;
// console.log(this.b)
// console.log(window.b)
// console.log(window.a)
// console.log(this.a);


// var obj= {
//     'key1':'val1',
//     'key2':'val2',
//     'key3':'val3'   
// }
// Object.keys(obj).forEach(key =>{
//     console.log(obj[key]);
// })   


// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// setTimeout(()=> console.log('c'), 0);
// console.log('d');

//Array Map function
// var arr = [1,2,3,4,5]
// var arrFun=arr.map(function(element){
//     console.log(element*5);
// })



// var a = 50;
// function fun(){
// var a =30;
// let b = 20;
// let c = 30;
// }
// // fun();
// console.log(a)


// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y();
//     }
//     console.log( x());


// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     const z = x()
//     console.log(z());


function x(){
    let a = 10;
    function y(){
    console.log(a);
    } 
    a= 50;   
    return y;  
    }
    const z = x()
    console.log(z());