
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;
        let confirmacaoSenha = document.getElementById('confirmacao_senha').value;


        if (!nome || !email || !senha || !confirmacaoSenha) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (senha !== confirmacaoSenha) {
            alert('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }


        alert('Cadastro realizado com sucesso!');
        this.reset();
    });


    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    const toggleSenhaBtn = document.createElement('button');
    toggleSenhaBtn.type = 'button';
    toggleSenhaBtn.id = 'toggleSenha';
    toggleSenhaBtn.textContent = 'Mostrar Senha';
    document.querySelector('form').insertBefore(toggleSenhaBtn, document.getElementById('senha').nextSibling); // Adiciona o botão após o campo de senha

    const senhaInput = document.getElementById('senha');


    toggleSenhaBtn.addEventListener('click', function () {
        if (senhaInput.type === 'password') {
            senhaInput.type = 'text';
            toggleSenhaBtn.textContent = 'Ocultar Senha';
        } else {
            senhaInput.type = 'password';
            toggleSenhaBtn.textContent = 'Mostrar Senha';
        }
    });
});
