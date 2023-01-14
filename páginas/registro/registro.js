function onChangeEmail() {

    const email = form.email().value;

    form.emailrequerido().style.display = email ? "none" : "block";

    form.emailinvalid().style.display = validateEmail(email) ? "none" : "block";

    toggleRigisterButtonDisable();

}



function onChangePassword() {

    const password = form.password().value;

    form.senharequerida().style.display = password ? "none" : "block";

    form.numerosenha().style.display = password.length >= 6 ? "none" : "block";


    toggleRigisterButtonDisable();

    validatePasswordsMath();
}



function onChangeConfirmPassword() {

    validatePasswordsMath();

    toggleRigisterButtonDisable();

}



function validatePasswordsMath() {

    const password = form.password().value;

    const confirmPassword = form.confirmPassword().value;

    form.senhamath().style.display = password == confirmPassword ? "none" : "block";

}



function toggleRigisterButtonDisable() {


    form.buttonreg().disabled = !isFormValid();
}



function isFormValid() {

    const email = form.email().value;

    if (!email || !validateEmail(email)) {

        return false;

    }



    const password = form.password().value;

    if (!password || password.length < 6) {

        return false;

    }



    const confirmPassword = form.confirmPassword().value;

    if (password != confirmPassword) {

        return false;

    }


    return true;
}

function registro(){
    
    showLoading();
    
    const email = form.email().value;
    
    const password = form.password().value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password
    
        ).then(()=> {
    
            hideLoading();
    
            window.location.href = "../../páginas/home/home.html";

        }).catch(error => {

            hideLoading();

            alert (getErrorMessage(error));

        })

    }

function getErrorMessage(error){
if (error.code =="auth/email-already-in-use"){
    return ("Esse usuário já existe");
}
return error.message;

}

const form = {

    confirmPassword: () => document.getElementById('confirmPassword'),

    senhamath: () => document.getElementById('senha-match'),

    email: () => document.getElementById('email'),

    emailinvalid: () => document.getElementById('email-invalido'),

    emailrequerido: () => document.getElementById('email-requerido'),

    password: () => document.getElementById('password'),

    senharequerida: () => document.getElementById('senha-requerida'),

    numerosenha: () => document.getElementById('senha-length'),

    buttonreg: () => document.getElementById('registro-button')
}