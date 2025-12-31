const btnlogin=document.getElementById("Loginbtn");
const btnsignin=document.getElementById("signinbtn");

btnlogin.addEventListener("click",handlelogin);
function handlelogin(){
    btnlogin.textContent="Loading ...";
    setTimeout(()=>{
        window.location.href="/src/view/login.html";
       
    },850);
}