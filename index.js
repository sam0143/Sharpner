class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    static countUsers(){
        console.log("There are 50 users");
    }
    register(){ 
        console.log(this.username + 'Regisetred');
    }
}

class Member extends User {
    constructor(username,email,password,memberPackage){
    super(username,email,password);
    this.package=memberPackage;
    let todaysDate=new Date()   
    const memberShipactivatetillYear=todaysDate.getFullYear();
    const memberShipactivatetillMonth=todaysDate.getMonth();
    const memberShipactivatetillDate=todaysDate.getDate();
    const memberShipactivatetillDay=new Date(
        memberShipactivatetillYear,
        memberShipactivatetillMonth+1,
        memberShipactivatetillDate
    ) 
    }

    renewMembership(){
        const mYear = this.mDay.getFullYear();
        const mMonth=this.mDay.getMonth();
        const mDay=this.mDay.getDate();
        if(this.package === 'stranded package'){
            this.mDate=new Date(
                mYear,
                mMonth+1,
                mDate
            )
        }else if(this.package === 'yearly package'){
            this.mDate=new Date(
                mYear+1,
                mMonth,
                mDate
            )
        }
    }   
    getPackage(){
        return this.username + ' subscribed to ' + this.package + ' package '
    }
}

let user = new Member('sam','sam@gmail.com','123','stranded package');
let user1 = new Member('vemky','venky@gmail.com','123','Yearly package');
// User.countUsers();
// console.log(user.getPackage());
// console.log(user1.getPackage());

// const items = document.querySelectorAll('.item');
// items.forEach((item)=>console.log(item));

// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent='Hello';
// ul.children[0].style.color='green'
// ul.children[1].style.background = 'yellow'


const btn = document.querySelector('.btn');
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log('click');
});

const btn1 = document.querySelector('.btn');
btn1.addEventListener('mouseover' , (e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background="#ccc"
})

const btn2 =document.querySelector('.btn');
btn2.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='yellow'
})

const myform=document.querySelector('#my-form');
const msg=document.querySelector('.msg')
const name=document.querySelector('#name');
const email=document.querySelector('#email');
const users=document.querySelector('.users');

myform.addEventListener('submit', onSubmit)

function onSubmit(e)
{
    e.preventDefault();
    if(name.value === '' || email.value === ''){
        msg.innerHTML='Please Enter Datils'
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} : ${email.value}`)) ;  
        user.appendChild(li);
        name.value='';
        email.value='';
    }
}