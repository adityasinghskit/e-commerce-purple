document.querySelector("form").addEventListener("submit",otpfunc);

function otpfunc() {
    event.preventDefault();
    let otp1=document.querySelector("#otp").value;
    if(otp1=="1234") {
        alert("You have successfully completed the payment!");
        window.location.reload();
    }else{
        alert("Incorrect OTP!")
        window.location.reload();
    }

}