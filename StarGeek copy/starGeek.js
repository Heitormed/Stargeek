var Cadastro = []

Cadastro = JSON.parse(localStorage.getItem('bdinf'))
if (Cadastro == null) {
    Cadastro = []
}
console.log(Cadastro);

function ValidarCadastro(nome, email, senha) {
    if (nome != '' && email != '' && senha != '') {
        return true
    } else {
        return false
    }
}

function Cadastrar() {

    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    var aValidarCadastro = ValidarCadastro(nome, email, senha)
    if (aValidarCadastro == false) {
        alert('Verifique os dados antes de cadastrar')
        return false
    }

    var Conta = {
        Nome: nome,
        Email: email,
        Senha: senha
    }
    Cadastro.push(Conta)

    localStorage.setItem('bdinf', JSON.stringify(Cadastro))

    location.href = 'login.html'
}

function login() {
    var nome = document.getElementById('nome').value
    var senha = document.getElementById('senha').value
    var encontrou = false

    Cadastro.forEach(item => {
        if (nome == item.Nome && senha == item.Senha) {
            encontrou = true
            location.href = 'principal.html'
        }
    })
    if (encontrou == false)
        alert('Usuario não encontrado')
}

var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('bdFilme'))
if (listaFilmes == null) {
    listaFilmes = []
}

function Gerar() {
    var nome = document.getElementById('nome').value
         document.getElementById('link').value
    
    var Midia = {
        Título: nome,
        Link: link
    }
    listaFilmes.push(Midia)

    localStorage.setItem('bdFilme', JSON.stringify(listaFilmes))

    alert ('Filme Cadastro com sucesso')

}

function CadastrarFilme() {
    document.getElementById('midia').innerHTML = ''
    listaFilmes.forEach((item) => {
        document.getElementById('midia').innerHTML += `<img class='f posta' src='${item.Link}'>`
    })
}





