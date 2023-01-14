function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();

}
function onChangePassword() {
    togglePasswordErrors();
    toggleButtonsDisable();
    toggleEmailErrors();
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}
function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        hideLoading();
        window.location.href = "home.html";
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    });

    function getErrorMessage(error) {
        if (error.code == "auth/user-not-found") {
            return "Usuário não encontrado";
        }
        if (error.code == "auth/wrong-password") {
            return "Senha inválida";
        }
        if (error.code == "auth/invalid-email"){
            return ("Informe seu email");
        }
        if (error.code == "auth/internal-error"){
            return ("Informe sua senha");
        }
        return error.message;
    }
}

function registrar() {
   
    window.location.href = "páginas/registro/registrar.html";
}





function toggleEmailErrors() {
    const email = form.email().value;
    form.emailrequerido().style.display = email ? "none" : "block";

    form.emailinvalido().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    form.senharequerida().style.display = password ? "none" : "block";

}


const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    recuperarsenha: () => document.getElementById('recuperar-senha'),
    buttonlog: () => document.getElementById('login-button'),
    emailrequerido: () => document.getElementById('email-requerido'),
    emailinvalido: () => document.getElementById('email-invalido'),
    senharequerida: () => document.getElementById("senha-requerida")
}
function recuperarSenha(){
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(()=>{
        hideLoading();
        alert('Email enviado com sucesso!');
    }).catch(error => {
        hideLoading();  
        alert("Usuário não encontrado");
    });
}
