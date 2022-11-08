// Get elements by Class Name
const items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.backgroundColor='green';
// Gets an error 
// items.style.fontWeight='bold';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold'
}