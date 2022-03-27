document.querySelector("form").addEventListener("submit",signupfunc);


function signupfunc() {
    event.preventDefault();
    let email1=document.querySelector("#email").value;
    let pass1=document.querySelector("#pass").value;
    let mobile1=document.querySelector("#mobile").value;

    let obj={
        email:email1,
        pass:pass1,
        mobile:mobile1

    }

    let arr=JSON.parse(localStorage.getItem("signkey")) || [];
    arr.push(obj);
    localStorage.setItem("signkey",JSON.stringify(arr));
    alert("You have successfully Sign-In!")
    window.location.href="signin.html";


}