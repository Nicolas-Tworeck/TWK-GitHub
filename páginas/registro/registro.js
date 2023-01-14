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



    validatePasswordsMath();
}







function validatePasswordsMath() {

    const password = form.password().value;




}





function registro() {

    showLoading();

    const email = form.email().value;

    const password = form.password().value;

    
    firebase.auth().createUserWithEmailAndPassword(email, password

    ).then(() => {

        hideLoading();

        window.location.href = "../../home.html";
    }).catch(error => {

        hideLoading();

        alert(getErrorMessage(error));

    })
    alert (getErrorMessage(error));
}




function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return ("Esse usuário já existe");
    }

    if (error.code == "auth/internal-error"){
        return ("Informe sua senha");
    }
    if (error.code == "auth/invalid-email"){
        return "Informe email";
    }


    return error.message;

}

function login(){
    window.location.href = "../../index.html";
}


const form = {

   

    senhamath: () => document.getElementById('senha-match'),

    email: () => document.getElementById('email'),

    emailinvalid: () => document.getElementById('email-invalido'),

    emailrequerido: () => document.getElementById('email-requerido'),

    password: () => document.getElementById('password'),

    senharequerida: () => document.getElementById('senha-requerida'),

    numerosenha: () => document.getElementById('senha-length'),

    buttonreg: () => document.getElementById('registro-button')
}