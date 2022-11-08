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

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor="green";
// var thirdItem = document.querySelector('.list-group-item: nth-child(3)');
// thirdItem.style.visibility='hidden';


// // QuerySelectorAll 

// var li = document.querySelectorAll('list-group-items');
// li[2].style.color='green';   
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }



//parentNode

var itemList=document.querySelector('#items');
itemList.parentNode.style.backgroundColor='green';
console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode);

//parentElement

var itemList=document.querySelector('#items');
itemList.parentElement.style.backgroundColor='green';
console.log(itemList.parentElement);

//childNodes

console.log(itemList.childNodes);

console.log(itemList.children)
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='green'

// // firstChild
console.log(itemList.firstChild);

// //firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello';

//lastChild
console.log(itemList.lastChild);

// //lastChildElement
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Bye"

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green'

//create Element
var newDev=document.createElement('div');
//Add class
newDev.className='newDev';
//Add id
newDev.id="newdevID"
//Add Attribute 
newDev.setAttribute('title' , 'titleDev')
// console.log(newDev);

//Create Text to Node
var newDevText=document.createTextNode("Hello World");
//Add text to div
newDev.appendChild(newDevText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDev,h1)



