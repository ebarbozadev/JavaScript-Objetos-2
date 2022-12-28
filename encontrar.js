// Criando uma constante que armazena todos os objetos JSON
const clientes = require("./clientes.json");

// Criando uma função que pesquisa dentro desses objetos
function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

console.log(encontrado);