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
// secondItem[1].style.backgroundColor="green";
// var thirdItem = document.querySelector('.list-group-item: nth-child(3)');
// thirdItem[2].style.visibility='hidden';


// // QuerySelectorAll 

// var li = document.querySelectorAll('list-group-items');
// li[2].style.color='green';   
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }



//parentNode

// var itemList=document.querySelector('#items');
// itemList.parentNode.style.backgroundColor='green';
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);

// //parentElement

// var itemList=document.querySelector('#items');
// itemList.parentElement.style.backgroundColor='green';
// console.log(itemList.parentElement);

// //childNodes

// console.log(itemList.childNodes);

// console.log(itemList.children)
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='green'

// // // firstChild
// console.log(itemList.firstChild);

// // //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello';

// //lastChild
// console.log(itemList.lastChild);

// // //lastChildElement
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Bye"

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previoussibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'

// //create Element
// var newDev=document.createElement('div');
// //Add class
// newDev.className='newDev';
// //Add id
// newDev.id="newdevID"
// //Add Attribute 
// newDev.setAttribute('title' , 'titleDev')
// // console.log(newDev);

// //Create Text to Node
// var newDevText=document.createTextNode("Hello World");
// //Add text to div
// newDev.appendChild(newDevText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// container.insertBefore(newDev,h1)




//Edit and Delete a list 

var form = document.getElementById('form');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit' ,addItem);

//Remove Item event
itemList.addEventListener('click',removeItem);

//Filter event
filter.addEventListener('keyup',filterItem);



//add item
function addItem(e){
    e.preventDefault();
    var inputVal=document.getElementById('input').value;
    var disVal=document.getElementById('discription').value;

    var li=document.createElement('li');
    li.className='list-group-item';
  
    li.appendChild(document.createTextNode(inputVal));
    li.appendChild(document.createTextNode(disVal));
    itemList.appendChild(li);

    //delete Button
    var deleteBtn = document.createElement('button');

    //Adding class to Delete button
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';

    //Append text to node
    deleteBtn.appendChild(document.createTextNode('Delete'));
    
    //Append button to li
     li.appendChild(deleteBtn);
     var editBtn=document.createElement('button');
    editBtn.className='btn btn-primary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'))
    li.appendChild(editBtn);
     //append li to List
    itemList.appendChild(li);
}

//Remove item 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure ?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter item
function filterItem(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    //Get lis
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){

        var itemName=item.firstChild.textContent;
        var deseription=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || deseription.toLowerCase().indexOf(text) != -1){
            item.style.display='block'; 
        } else{
            item.style.display='none';
        }
    })
}

