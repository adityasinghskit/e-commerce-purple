document.querySelector("form").addEventListener("submit",signinfunc);


function signinfunc() {
    event.preventDefault();
    let email1=document.querySelector("#email").value;
    let pass1=document.querySelector("#pass").value;

    let arr=JSON.parse(localStorage.getItem("signkey"));
    let match=false;
    arr.map(function(el) {
        if(el.email==email1 && el.pass==pass1) {
            match=true;
        }
    })
    if(match) {
        alert("You have successfully Sign-In");
        window.location.href="men.html";
    }else{
        alert("Incorrect Email/Password");
        window.location.reload();
    }

    
}