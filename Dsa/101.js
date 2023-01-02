// Create a class named 'Member' having the following members:
// Data Attributes of Member Class
// 1 - Name
// 2 - Age
// 3 - Phone number
// 4 - Address
// 5 - Salary
// It also has a method named 'printSalary' which prints the salary of the members.
 
// Create a  class 'Employee' which inherits the 'Member' class. The 'Employee' class has one attribute 'specialization'.
//  Now, assign name, age, phone number, address and salary to an employee  by making an object of the class and print the same.

// Hint:- Use super method to call parent constructor of Member class.




class Member {
    constructor(name,age,phonenumber,address,salary){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.address=address;
        this.salary=salary;
    }
    printSalary(salary){
       return `Salary ${this.salary}`;
    }
} 
class Employee extends Member{
    constructor(name,age,phonenumber,address,salary,specialization){
        super(name,age,phonenumber,address,salary)
        this.specialization=specialization;
    }
}
var obj = new Employee('sam','20','123','xyz','100','csc');
console.log(obj);
