
const inputmail=document.getElementById("mail");
const inputpassword=document.getElementById("password");
const btnlogin=document.getElementById("submitbtn");
const btnview=document.getElementById("display");
const result=document.getElementById("result");
btnlogin.addEventListener("click",handlelogin);
let user=null;
import { finduser } from "../Model/data.js";
function handlelogin(){
    const mail=inputmail.value;
    const pass=inputpassword.value;
    if(!mail || !pass){
        result.textContent="Veuillez remplir tous les champs";
        result.style.color="red";
        return;
    }
    user=finduser(mail,pass);
    
    if(user){
        result.textContent="Succés";
        result.style.color="green";
        
        setTimeout(()=>window.location.href="/src/view/dashboard.html",1000);
        
        sessionStorage.setItem("currentuser",JSON.stringify(user));

    }
    else{
        result.textContent="email ou mot de passe incorrect";
        result.style.color="red";
    }
}



btnview.onclick=function(){
    if(inputpassword.getAttribute("type")=="password")
    inputpassword.setAttribute("type","text");
    else
        inputpassword.setAttribute("type","password");

}