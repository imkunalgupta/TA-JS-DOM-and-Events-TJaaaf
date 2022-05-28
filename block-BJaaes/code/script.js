let form = document.querySelector("form");
let userInfo = {};
let errorMessages = {};

function displayError(name) {
    let elm =form.elements[name] 
    elm.nextElementSibling.innerText = errorMessages[name];
    elm.parentElement.classList.add("error");
}
function displaySuccess(name) {
    let elm =form.elements[name] 
    elm.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    elm.parentElement.classList.remove("error");
    elm.parentElement.classList.add("success");
}

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const passwordCheck = elements["password-check"].value;

    if(username.length <= 4){
        errorMessages.username = "Username can't be less than 4 character";
        displayError("username");
    } else{
        displaySuccess("username");
    }

    if(!isNaN(name)) {
        errorMessages.name = "Name can't be number";
        displayError("name");
    } else{
        displaySuccess("name");
    }

    if(!email.includes("@")){
        errorMessages.email = "Email must contain the symbol @";
        displayError("email");
    } else if(email.length <= 6){
        errorMessages.email = "Email can't be less than 6 character";
        displayError("email");
    } 
    else{
        displaySuccess("email");
    }

    if(isNaN(phone)) {
        errorMessages.name = "phone number can only be a number";
        displayError("phone");
    } else if(phone.length < 10) {
    errorMessages.phone = "Phone can't be less than 10 character";
    displayError("phone");
    } else{
        displaySuccess("email");
    }
    if (password !==  passwordCheck) {
        errorMessages.password = "password must be same to confirm password";
        displayError("password");
        displayError("password-check");
    } else{
        displaySuccess("password");
        displaySuccess("password-check");
    }

    console.log({username, name, email, phone, password, passwordCheck});
}

form.addEventListener("submit", handleSubmit);