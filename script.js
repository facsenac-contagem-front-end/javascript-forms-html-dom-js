// =========================================================
// Cadastro de Aluno · UC4 Desenvolvimento Front-end
// Parte 2 da aula: o DOM dá vida ao formulário
// Profa. Ma. Tamara Simões
// =========================================================

// Teste rápido: abra o console (F12) e veja se esta mensagem aparece.
// Se aparecer, o script.js está ligado ao index.html.
console.log("script.js carregado!");


// ---------------------------------------------------------
// 1. CAPTURAR os elementos do formulário
// ---------------------------------------------------------
// Use document.getElementById("id") ou document.querySelector("#id")
// Guarde cada elemento numa const:
//   campos: nome, email, senha, curso, termos
//   o parágrafo de mensagem (#mensagem)
//   o botão de cadastrar (#btn-cadastrar)
//   a lista de alunos (#lista-alunos) e o aviso de lista vazia (#lista-vazia)


const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const campoCurso = document.getElementById("curso");
const campoTermos = document.getElementById("termos");
const camposTurno = document.querySelectorAll('input[name="turno"]');
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("btn-cadastrar");
const formulario = document.getElementById("form-aluno");
const listaAlunos = document.getElementById("lista-alunos");
const listaVazia = document.getElementById("lista-vazia");




// ---------------------------------------------------------
// 2. VALIDAR os campos
// ---------------------------------------------------------
// Crie uma função validar() que retorna true ou false.
// Leia o que foi digitado com .value (e .checked no checkbox).
// Regras do nosso cadastro:
//   - nome não pode ficar vazio (dica: .trim())
//   - e-mail precisa ter "@" (dica: .includes("@"))
//   - senha com pelo menos 6 caracteres (dica: .length)
//   - um curso precisa ser escolhido
//   - o checkbox de termos precisa estar marcado
// Quando algo estiver errado: escreva no #mensagem com .textContent
// e marque o campo com .classList.add("invalido")


function validar() {
  // limpa erros anteriores
  const campos = [campoNome, campoEmail, campoSenha, campoCurso, campoTermos];
  campos.forEach(function (campo) {
    campo.classList.remove("invalido");
  });
  mensagem.textContent = "";
  mensagem.classList.remove("erro", "sucesso");

  function erro(texto, campo) {
    mensagem.textContent = texto;
    mensagem.classList.add("erro");
    campo.classList.add("invalido");
    campo.focus();
    return false;
  }

  if (campoNome.value.trim() === "") {
    return erro("Preencha o nome.", campoNome);
  }
  if (!campoEmail.value.includes("@")) {
    return erro("O e-mail precisa ter @.", campoEmail);
  }
  if (campoSenha.value.length < 6) {
    return erro("A senha precisa ter pelo menos 6 caracteres.", campoSenha);
  }
  if (campoCurso.value === "") {
    return erro("Escolha um curso.", campoCurso);
  }
  if (!document.querySelector('input[name="turno"]:checked')) {
    return erro("Escolha um turno.", camposTurno[0]);
  }
  if (!campoTermos.checked) {
    return erro("Aceite os termos para continuar.", campoTermos);
  }
  return true;
}




// ---------------------------------------------------------
// 3. CRIAR novos elementos no HTML
// ---------------------------------------------------------
// Crie uma função adicionarAluno() que:
//   - cria um <li> com document.createElement("li")
//   - coloca o texto com .textContent
//   - pendura o <li> na lista com .appendChild()
//   - esconde o aviso "Nenhum aluno cadastrado ainda"


function adicionarAluno() {
  const li = document.createElement("li");

  const nome = document.createElement("strong");
  nome.textContent = campoNome.value.trim();

  const detalhes = document.createElement("span");
  detalhes.textContent = campoEmail.value.trim() + " · " + campoCurso.value + " · " + document.querySelector('input[name="turno"]:checked').value;

  li.appendChild(nome);
  li.appendChild(detalhes);
  listaAlunos.appendChild(li);

  listaVazia.style.display = "none";
}




// ---------------------------------------------------------
// 4. PRÉVIA: addEventListener
// ---------------------------------------------------------
// Quando clicar no botão, validar e, se estiver tudo certo, adicionar o aluno.
//   botao.addEventListener("click", function () {
//     ...
//   });
// Semana que vem: eventos com calma!


botao.addEventListener("click", function () {
  if (validar()) {
    adicionarAluno();
    formulario.reset();
    mensagem.textContent = "Aluno cadastrado com sucesso!";
    mensagem.classList.add("sucesso");
  }
});

// Ao limpar o formulário, tira também mensagens e marcações de erro
formulario.addEventListener("reset", function () {
  mensagem.textContent = "";
  mensagem.classList.remove("erro", "sucesso");
  [campoNome, campoEmail, campoSenha, campoCurso, campoTermos].forEach(function (c) {
    c.classList.remove("invalido");
  });
});


