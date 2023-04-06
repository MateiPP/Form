const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const submitError = document.getElementById("submitError");


function checkName(){
    var name = document.getElementById("name").value;
    if(name.length == 0){
        nameError.innerHTML = "Enter a valid name";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Enter full name";
        return false;
    }
    nameError.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
    return true;
}

function checkPhone(){
    var phone = document.getElementById("phone").value;
    if(phone.length == 0){
        phoneError.innerHTML = "Enter a valid phone number";
        return false;
    }
    if (phone.length !== 10 ){
        phoneError.innerHTML = "Phone number should be 10 digits";
        return false;
    }
    
    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Enter a valid phone number";
        return false;
    }

    phoneError.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
    return true;

}

function checkEmail(){
    var email = document.getElementById("email").value;

    if(email.length == 0){
        emailError.innerHTML = "Enter a email";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Enter a valid email";
        return false;
    }
    emailError.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
    return true;
}

function checkMessage(){
    var message = document.getElementById("message").value;
    var required = 20;
    var remaind = required - message.length;

    if (remaind > 0){
        messageError.innerHTML = `${remaind} caracters left`;
        return false

    }
    messageError.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
    return true;
}


function submitForm(){
    if(!checkName() || (!checkEmail) || (!checkMessage) || (!checkPhone)){
        submitError.style.display ="block";
        submitError.innerHTML = "Fix the error";
        setTimeout(function(){
            submitError.style.display = "none";
        }, 5000 );
        return false;
    }
}








