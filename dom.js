// Get elements by Class Name
// const items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].style.backgroundColor='green';
// // Gets an error 
// // items.style.fontWeight='bold';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold'
// }


// GetElementByTagName

// const li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[2].style.backgroundColor='blue';

// for(var i=0 ;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }


// QuerySelector

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor="green";
var thirdItem = document.querySelector('.list-group-item: nth-child(3)');
thirdItem.style.visibility='hidden';


// QuerySelectorAll 

var li = document.querySelectorAll('list-group-items');
li[2].style.color='green';   
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}



