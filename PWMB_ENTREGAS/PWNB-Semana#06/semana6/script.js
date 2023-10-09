document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio do formulário

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username.trim() === "" || password.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("Login feito com sucesso!");
            // Limpar os campos de nome de usuário e senha
            usernameInput.value = "";
            passwordInput.value = "";

            // Você pode redirecionar para outra página ou executar outras ações aqui
        }
    });
});
