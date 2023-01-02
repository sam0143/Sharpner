// Write a Program to create a Class Employee
// It contains two attributes -> Name, Salary
// Create 5 objects and initialize any random values for Name and Salary to it.
// Store all these objects in an Array and print the names of the employees sorted in Descending
//  Order of Salary using any of the sorting mechanisms.
// (bubble Sort, Insertion Sort or selection Sort).




class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
}

var obj1 = new Employee('sam',1000);
var obj2 = new Employee('venky',7000);
var obj3 = new Employee('harish',5000);
var obj4 = new Employee('redda',10000);
var obj5 = new Employee('chotu',6000);
// console.log(obj1);

var arr = [obj1, obj2, obj3, obj4, obj5]

arr.sort(function(a,b){
    return a.salary - b.salary ;
});
console.log(arr);

