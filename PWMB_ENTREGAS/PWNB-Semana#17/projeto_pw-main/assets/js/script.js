document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio do formulário

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Verifica se o usuário e a senha são 'admin'
        if (username === "admin" && password === "1111") {
            alert("Login feito com sucesso!");
            // Limpar os campos de nome de usuário e senha
            usernameInput.value = "";
            passwordInput.value = "";

            // Redirecionar para a página principal após 2 segundos (2000 milissegundos)
            setTimeout(function () {
                window.location.href = "index.html"; // Substitua com o nome do seu arquivo de página principal
            }, 100); // Tempo em milissegundos antes de redirecionar
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
});
