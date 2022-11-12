// // Call , Apply , Bind
// var obj ={
//     num : 3
// };
// var ObjFunction = function(a,b){
//     return this.num + a + b;
// } 
// console.log(ObjFunction.call(obj,a,b));
// console.log(ObjFunction.apply(obj,[a,b]));
// var bond = ObjFunction.bind(obj);
// console.log(bond(a,b));


// // Print Age of the student
// var Student = {
//     age:20
// }
// function student(){
//     return "Student Age is " + this.age;
// }
// console.log(student());


// // Currying by using binding
// // let multiply = function (x,y){
// //     console.log(x*y); 
// // }
// // let multiplyByTwo = multiply.bind(this,5);
// // multiplyByTwo(3);


// //Currying by using Clouser
// var multiply = function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }

// var multiplyByTwo = multiply(2);
// multiplyByTwo(10);


// var count=0;
// const fun = (arr)=>{
//     return () =>{
//         console.log('Hello ' + arr[count])
//         count ++;
//     }
// };

// let name = fun(["ram",'Shayam']);
// name();
// name();



// 'use strict';
// //This in Global Scope  
// this.table="window table";
// // console.log(window.table);

// //Function  
// const cleanTable = function(soap){
//     const innerfunction = (_soap)=>{
//         console.log(`cleaning ${this.table} with ${this.soap}`); 
//     }
//     innerfunction(soap);
// }

// // cleanTable.console(this , 'some soap');

// this.garage = {
//     table : "garage table"
// };

// //Object 
// let johnroom = {
//     table :'john table',
// //Method
//     // cleanTable(){
//     //     console.log(`cleaning ${this.table}`);
//     // }
// }

// //Class
// class createTable {
//     constructor(name){
//         this.table=`${name}s table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} with ${soap}`);
//     }
// }
// //Object
// const jill = new createTable('jill');
// const john = new createTable('john');

// console.log(johnroom.table);
// johnroom.cleanTable();
// cleanTable.call(this,'some soap');
// cleanTable.call(this.garage , 'some soap');
// cleanTable.call(this.johnroom , 'some soap');


class Student {
    // static count=0;
    constructor(name , age , phonenumber,marks){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.marks=marks;
        // Student.countStudents();
    }
    static counStundets(){
        return(Student.count++)
    }
     eligible(){
        if(this.marks > 40 ){
            console.log(`${this.name} age ${this.age} is eligible`);
        }
        else{
            console.log(`${this.name} age ${this.age} is not eligible`);
        }
    }
    setPlcementAge(minPlacamentAge){
        return (minMarks)=>{
            if(this.marks > minMarks && this.age>minPlacamentAge){
                console.log(this.name + " is ready for plcement");
            }
            else{
                console.log(this.name + "is not ready for plcement")
            }
        }
    }
}

let student1 = new Student('sam',20,12345,50);
let student2 =new Student('venky',21,12340,40);
let student3 =new Student('raju',22,12340,44);
let student4 =new Student('kaki',23,1234,55);
let student5 =new Student('gopi',21,12340,39);

// console.log(Student.countStudents());
student1.eligible();
student2.eligible();
student3.eligible();
student4.eligible();
student5.eligible();
student1.setPlcementAge(18)(40);



