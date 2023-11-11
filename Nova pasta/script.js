// script.js

const clientes = [];
const form = document.querySelector('#cadastro form');
const lista = document.querySelector('#lista tbody');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.querySelector('#nome').value;
  const sobrenome = document.querySelector('#sobrenome').value;
  const tipoCliente = document.querySelector('#tipo-cliente').value;
  const dataNascimento = document.querySelector('#data-nascimento').value;
  const cep = document.querySelector('#cep').value;
  const cidade = document.querySelector('#cidade').value;
  const endereco = document.querySelector('#endereco').value;
  const numero = document.querySelector('#numero').value;

  // Validação dos campos usando expressões regulares
  if (!validarNome(nome) || !validarSobrenome(sobrenome) || !validarDataNascimento(dataNascimento) ||
      !validarCEP(cep) || !validarCidade(cidade) || !validarEndereco(endereco) || !validarNumero(numero)) {
    return;
  }

  // Se os campos forem válidos, adicione o cliente à lista
  const cliente = { nome, sobrenome, tipoCliente, dataNascimento, cep, cidade, endereco, numero };
  clientes.push(cliente);
  atualizarLista();
  form.reset();
});

function validarNome(nome) {
  const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  if (!nomeRegex.test(nome)) {
    alert('Nome inválido. Deve conter apenas letras e espaços.');
    return false;
  }
  return true;
}

function validarSobrenome(sobrenome) {
  const sobrenomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  if (!sobrenomeRegex.test(sobrenome)) {
    alert('Sobrenome inválido. Deve conter apenas letras e espaços.');
    return false;
  }
  return true;
}

function validarDataNascimento(dataNascimento) {
  const dataNascimentoRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dataNascimentoRegex.test(dataNascimento)) {
    alert('Data de Nascimento inválida. Deve estar no formato AAAA-MM-DD.');
    return false;
  }
  return true;
}

function validarCEP(cep) {
  const cepRegex = /^\d{5}-\d{3}$/;
  if (!cepRegex.test(cep)) {
    alert('CEP inválido. Deve estar no formato nnnnn-ccc.');
    return false;
  }
  return true;
}

function validarCidade(cidade) {
  const cidadeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  if (!cidadeRegex.test(cidade)) {
    alert('Cidade inválida. Deve conter apenas letras e espaços.');
    return false;
  }
  return true;
}

function validarEndereco(endereco) {
  const enderecoRegex = /^[A-Za-z0-9À-ÖØ-öø-ÿ\s]+$/;
  if (!enderecoRegex.test(endereco)) {
    alert('Endereço inválido. Deve conter apenas letras, números e espaços.');
    return false;
  }
  return true;
}

function validarNumero(numero) {
  const numeroRegex = /^\d+$/;
  if (!numeroRegex.test(numero)) {
    alert('Número inválido. Deve conter apenas números.');
    return false;
  }
  return true;
}

function buscarEndereco() {
  const cepInput = document.getElementById("cep");
  const logradouroInput = document.getElementById("endereco");
  const cidadeInput = document.getElementById("cidade");

  if (validarCEP(cepInput.value)) {
    const cep = cepInput.value.replace('-', '');

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert("CEP não encontrado.");
        } else {
          logradouroInput.value = `${data.logradouro}`;
          cidadeInput.value = `${data.localidade}`;
          // Pode adicionar mais campos de endereço conforme necessário
        }
      })
      .catch(error => {
        console.error("Ocorreu um erro na solicitação: " + error);
      });
  }
}

function atualizarLista() {
  lista.innerHTML = '';

  clientes.forEach((cliente, index) => {
    const row = lista.insertRow();
    const cellNome = row.insertCell(0);
    const cellSobrenome = row.insertCell(1);
    const cellTipoCliente = row.insertCell(2);
    const cellDataNascimento = row.insertCell(3);
    const cellCep = row.insertCell(4);
    const cellCidade = row.insertCell(5);
    const cellEndereco = row.insertCell(6);
    const cellNumero = row.insertCell(7);
    const cellAcoes = row.insertCell(8);

    cellNome.textContent = cliente.nome;
    cellSobrenome.textContent = cliente.sobrenome;
    cellTipoCliente.textContent = cliente.tipoCliente;
    cellDataNascimento.textContent = cliente.dataNascimento;
    cellCep.textContent = cliente.cep;
    cellCidade.textContent = cliente.cidade;
    cellEndereco.textContent = cliente.endereco;
    cellNumero.textContent = cliente.numero;

    const excluirBotao = document.createElement('button');
    excluirBotao.textContent = 'Excluir';
    excluirBotao.classList.add('botao-excluir');
    excluirBotao.addEventListener('click', () => excluirCliente(index));

    const alterarBotao = document.createElement('button');
    alterarBotao.textContent = 'Alterar';
    alterarBotao.classList.add('botao-alterar');
    alterarBotao.addEventListener('click', () => alterarCliente(index));

    cellAcoes.appendChild(excluirBotao);
    cellAcoes.appendChild(alterarBotao);
  });
}

function excluirCliente(index) {
  clientes.splice(index, 1);
  atualizarLista();
}

function alterarCliente(index) {
  const cliente = clientes[index];

  document.querySelector('#nome').value = cliente.nome;
  document.querySelector('#sobrenome').value = cliente.sobrenome;
  document.querySelector('#tipo-cliente').value = cliente.tipoCliente;
  document.querySelector('#data-nascimento').value = cliente.dataNascimento;
  document.querySelector('#cep').value = cliente.cep;
  document.querySelector('#cidade').value = cliente.cidade;
  document.querySelector('#endereco').value = cliente.endereco;
  document.querySelector('#numero').value = cliente.numero;
}

// Inicializa a lista de clientes
atualizarLista();
