document.querySelector("form").addEventListener("submit",payfunc);

function payfunc() {
    event.preventDefault();
    let card1=document.querySelector("#card").value;
    let expiry1=document.querySelector("#expiry").value;
    let cvv1=document.querySelector("#cvv").value;
    if(card1=="1234" && expiry1=="12/24" && cvv1=="123") {
        alert("Correct card details!");
        window.location.href="otp.html";
    }else{
        alert("Incorrect card details!")
        window.location.reload();
    }

}