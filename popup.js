const popup = document.getElementById("loginPopup");
const loginForm = document.getElementById("loginForm");

function openPopup() {
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
    loginForm.reset();

    document.getElementById("password").type = "password";
    document.getElementById("togglePassword").textContent = "👁️";
}

// Login Form

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username===""){
        alert("Please enter username.");
        return;
    }

    if(password===""){
        alert("Please enter password.");
        return;
    }

    alert("Login Successful!");

    closePopup();

});

// Show Hide Password

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.onclick = function(){

    if(passwordInput.type==="password"){

        passwordInput.type="text";
        togglePassword.textContent="🙈";

    }else{

        passwordInput.type="password";
        togglePassword.textContent="👁️";

    }

};

// ESC Key

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closePopup();

    }

});