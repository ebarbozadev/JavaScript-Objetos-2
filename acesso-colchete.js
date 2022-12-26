// Criando um modelo de objeto

const modeloPessoa = {
    nome: "José Marcos",
    idade: 26,
    cpf: "11122233344455"
}

console.log(`Seja bem-vindo(a) à nossa loja ${modeloPessoa["nome"]}!`);

const chaves = ["nome", "idade", "cpf", "altura"];

console.log("-")

for (chave of chaves){
    console.log(modeloPessoa[chave]);
}

console.log("-")

chaves.forEach(
    (chave) => {
        if (modeloPessoa[chave] == undefined){
            console.log(`A chave ${chave} tem o valor indefinido`);
        } else{
            console.log(`Chave ${chave}: / Valor: ${modeloPessoa[chave]}`);
        }
    }
)