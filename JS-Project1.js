function formSubmit(event){
    event.preventDefault();
    var First = document.getElementById('first').value;
    var Second = document.getElementById('second').value;
    var Third =  document.getElementById('third').value;
    if(First.length > 0 && Second.length > 0 && Third.length > 0){
        var obj ={
            first : First,
            second:Second,
            third:Third
        }
        localStorage.setItem("User Details" , JSON.stringify(obj));
        addNewElementObject(obj);
}
}

function addNewElementObject(obj){
    var ul = document.getElementById('users');
    var li = document.createElement('li');
    li.appendChild(
        document.createTextNode(obj.first + " " + obj.second + ' ' + obj.third)
    )
        users.appendChild(li);

        var edit =document.createElement('input');
        edit.id='ei';
        edit.type='button';
        edit.value='edit'; 
        edit.addEventListener('click', ()=>{
            console.log(obj)
            document.getElementById('first').value=obj.first;
            document.getElementById('second').value=obj.second;
            document.getElementById('third').value=obj.third;
            li.remove();
        });
        console.log(edit);
        li.appendChild(edit);

       const d = document.createElement('input');
       d.id="di";
       d.type="button";
       d.value="delete";
       d.addEventListener('click',()=>{
        console.log(obj);
        document.getElementById('first').value=obj.first;
        document.getElementById('second').value=obj.second;
        document.getElementById('third').value=obj.third;
       })
       console.log(d);
       li.appendChild(d);
}
