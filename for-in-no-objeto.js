const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    enderecos: {
          rua: "R. Joseph Climber",
          numero: 1337,
          apartamento: true,
          complemento: "ap 934",
    }
};

for (chave in cliente){
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== 'fuction'){
        console.log(`${chave}: ${cliente[chave]}`)
    }
}