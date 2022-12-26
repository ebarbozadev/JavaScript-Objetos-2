// Criando um modelo de objeto

const modeloPessoa = {
    nome: "José Marcos",
    idade: 26,
    cpf: "11122233344455"
}

console.log(`Seja bem-vindo(a) à nossa loja ${modeloPessoa.nome}!`);
console.log(`Para confirmar que é você mesmo, esses são seus primeiros três dígitos do CPF, né? ${modeloPessoa.cpf.substring(0, 3)}`);