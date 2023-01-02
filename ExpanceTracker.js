let btn = document.getElementById('button')
btn.addEventListener("click",btnClicked);
function btnClicked(e) {
    e.preventDefault();
    let expaceAmount = document.getElementById('expanceAmount').value;
    let discription = document.getElementById('discription').value;
    let catagory = document.getElementById('catagory').value;
    const obj = {
      expaceAmount,
      discription,
      catagory
    }

    async function postRequest() {
        try {
            const resp = await axios.post('https://crudcrud.com/api/005752b1c54f4d8dae0426d852d1f468/expanceDetails/', obj);
            console.log(showExpanceList(resp.data));
        }
        catch (err) {
            console.log(err);
        }
    }
    postRequest();
}

function showExpanceList(data) {
    //create list display in UI
    const li = document.createElement('li');
    li.id = `${data._id}`;
    li.appendChild(document.createTextNode(`${data.expaceAmount} - ${data.discription} - ${data.catagory}`));
    itemList.appendChild(li);

    //create edit button

    const editbtn = document.createElement('button');
    editbtn.id = 'edit';
    editbtn.appendChild(document.createTextNode('edit'));
    editbtn.onclick = function () {
        console.log("edit btn clicked")
        editUser(data.expanceAmount, data.discription, data.catagory, data._id);
    };
    li.appendChild(editbtn);
    itemList.appendChild(li);

    //create update button

    let updatebtn = document.createElement('button');
    updatebtn.id = 'update';
    updatebtn.appendChild(document.createTextNode('update'));
    updatebtn.onclick = function () {
        console.log("update btn clicked")
        updateUser(data._id);
    }
    li.appendChild(updatebtn);
    itemList.appendChild(li);

    //delete button

    let deletebtn = document.createElement('button');
    deletebtn.id = 'delete';
    deletebtn.appendChild(document.createTextNode('delete'));
    deletebtn.onclick = function () {
        console.log("delete btn clicked")
        deleteUser(data._id);
    }
    li.appendChild(deletebtn);
    itemList.appendChild(li);
};

//show values on input field

function editUser(expanceAmount, discription, catagory, dataId) {
    document.getElementById('expanceAmount').value = expanceAmount;
    document.getElementById('discription').value = discription;
    document.getElementById('catagory').value = catagory;
}

async function updateUser(dataId) {
    try {
           await axios.put(`https://crudcrud.com/api/005752b1c54f4d8dae0426d852d1f468/expanceDetails/${dataId}`,
            {
                expanceAmount: document.getElementById('expanceAmount').value,
                discription: document.getElementById('discription').value,
                catagory: document.getElementById('catagory').value,
            })
    }
    catch(err) {
        console.log(err);
    }
}

async function deleteUser(userID) {
    try {
         await axios.delete(`https://crudcrud.com/api/005752b1c54f4d8dae0426d852d1f468/expanceDetails/${userID}`)
        {
            removeUser(userID)
        }
    }
    catch (err) {
        console.log(err);
    }

}

function removeUser(userID) {
    let ul = document.getElementById('itemList');
    let li = document.getElementById(userID);
    ul.removeChild(li);
}

window.addEventListener('DOMContentLoaded', async function () {
    try {
        const onDomLoad = await axios.get('https://crudcrud.com/api/005752b1c54f4d8dae0426d852d1f468/expanceDetails/');
        for (let i = 0; i < onDomLoad.data.length; i++) {
            showExpanceList(onDomLoad.data[i]);
        }
    }
    catch (err) {
        console.log(err);
    }
})
