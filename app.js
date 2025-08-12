'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

function criarFuncionarios(funcionario) {
    const body = document.body;

    //Criando o link
    const link = document.createElement('a');
    link.href = '#';
    body.appendChild(link);

    //Criando o container principal
    const containerFoto = document.createElement('div');
    containerFoto.classList.add('containerFuncionario');
    link.appendChild(containerFoto);

    //Criando a imagem
    const foto = document.createElement('img');
    foto.src = "img/" + funcionario.imagem;
    containerFoto.appendChild(foto);

    //Criando o p do nome
    const nome = document.createElement('p');
    nome.classList.add('nome');
    nome.textContent = funcionario.nome;
    containerFoto.appendChild(nome);

    //Criando o p do cargo
    const cargo = document.createElement('p');
    cargo.textContent = funcionario.cargo;
    containerFoto.appendChild(cargo);
}

function carregarFuncionarios() {
    funcionarios.forEach(criarFuncionarios);
}

carregarFuncionarios();