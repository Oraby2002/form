//regester user

let username =document.querySelector('#username')
let email =document.querySelector('#email')
let password =document.querySelector('#password')
let regester_btn =document.querySelector('#sign_up')


regester_btn.addEventListener('click',function(){
    if(username.value ===""||email.value ===""||password.value ===""){
        alert("pleas fill dats")
    }else{
        localStorage.setItem('username',username.value)
        localStorage.setItem('email',email.value)
        localStorage.setItem('password',password.value)
        
    }
    setTimeout(()=>{
        window.location="login.html";
    },1500)

})


































