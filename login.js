let inputName =document.querySelector('#input-name')
let inputPassword =document.querySelector('#input-password')
let loginBtn =document.querySelector('#sign_in')

let geteuser =localStorage.getItem("username")
let getPassword =localStorage.getItem("password")

loginBtn.addEventListener('click',function(){
    if(inputName.value ===""||inputPassword.value ===""){
        alert("pleas fill dats")
    }else{
        if(geteuser&&geteuser==='walid'&& getPassword&&getPassword==='123'){
        
        }else{window.alert("user name or password is wrong")}
        
        setTimeout(()=>{
            window.location="index.html";
        },1500)
       
        }

    


})

