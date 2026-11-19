// =========================================================
// Cadastro de Aluno · UC4 Desenvolvimento Front-end
// Parte 2 da aula: o DOM dá vida ao formulário
// Profa. Ma. Tamara Simões
// =========================================================

// Teste rápido: abra o console (F12) e veja se esta mensagem aparece.
// Se aparecer, o script.js está ligado ao index.html.
console.log("script.js carregado!");

const titulo = document.getElementsByTagName("h1") [0]
titulo.style.color = "red";
titulo.style.backgroundColor = "white";
titulo.innerText = "Super Sayajin 2"
// ---------------------------------------------------------
// 1. CAPTURAR os elementos do formulário
// ---------------------------------------------------------
// Use document.getElementById("id") ou document.querySelector("#id")
// Guarde cada elemento numa const:
//   campos: nome, email, senha, curso, termos
//   o parágrafo de mensagem (#mensagem)
//   o botão de cadastrar (#btn-cadastrar)
//   a lista de alunos (#lista-alunos) e o aviso de lista vazia (#lista-vazia)




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




// ---------------------------------------------------------
// 3. CRIAR novos elementos no HTML
// ---------------------------------------------------------
// Crie uma função adicionarAluno() que:
//   - cria um <li> com document.createElement("li")
//   - coloca o texto com .textContent
//   - pendura o <li> na lista com .appendChild()
//   - esconde o aviso "Nenhum aluno cadastrado ainda"




// ---------------------------------------------------------
// 4. PRÉVIA: addEventListener
// ---------------------------------------------------------
// Quando clicar no botão, validar e, se estiver tudo certo, adicionar o aluno.
//   botao.addEventListener("click", function () {
//     ...
//   });
// Semana que vem: eventos com calma!


