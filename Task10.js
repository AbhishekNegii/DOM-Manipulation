// const form = document.getElementById('form');
const form=document.querySelector('#form');
console.log(form)

form.addEventListener('onsubmit' , setLocalStorage);


function setLocalStorage(e){
   e.preventDefault();
    console.log(1);
    const name= e.target.username.value;
    const phonenumber= e.target.phonenumber.value;
    const email=e.target.emailid.value;
   

    localStorage.setItem('name', name)
    localStorage.setItem('phonenumber', phonenumber)
    localStorage.setItem('email', email)
}