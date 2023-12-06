document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastro-form");
    const newUsernameInput = document.getElementById("new-username");
    const newEmailInput = document.getElementById("new-email");
    const newPasswordInput = document.getElementById("new-password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    cadastroForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio do formulário

        const newUsername = newUsernameInput.value;
        const newEmail = newEmailInput.value;
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Verifica se todos os campos estão preenchidos
        if (newUsername.trim() === "" || newEmail.trim() === "" || newPassword.trim() === "" || confirmPassword.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return; // Retorna para evitar a validação adicional se algum campo estiver vazio
        }

        // Verifica se a senha e a confirmação de senha são iguais
        if (newPassword !== confirmPassword) {
            alert("As senhas não coincidem. Por favor, digite novamente.");
            return; // Retorna para evitar a submissão do formulário se as senhas não coincidirem
        }

        // Verifica se o e-mail tem um formato válido
        if (!isValidEmail(newEmail)) {
            alert("Por favor, insira um e-mail válido.");
            return; // Retorna para evitar a submissão do formulário se o e-mail for inválido
        }

        // Simula o cadastro bem-sucedido (você pode adicionar aqui a lógica real do cadastro)
        alert("Cadastro feito com sucesso!");
        // Limpar os campos após o "cadastro"
        newUsernameInput.value = "";
        newEmailInput.value = "";
        newPasswordInput.value = "";
        confirmPasswordInput.value = "";
        // Redirecionar para a página de login após o cadastro
        window.location.href = "login.html"; // Altere o caminho para a página de login conforme necessário
    });

    // Função para verificar se o e-mail tem um formato válido (simplificada)
    function isValidEmail(email) {
        // Esta é uma verificação simples de e-mail para fins de demonstração
        // Você pode implementar uma lógica de validação de e-mail mais robusta
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
