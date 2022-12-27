const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: [
        "1155555550",
        "2266666660"
    ],
    irmao: {
        nome: "Emanuel",
        idade: 19,
        email: "emanuel@firma.com",
        telefone: [
            "3377777771",
            "4488888882"
        ]
    }
};

console.log(cliente.irmao.telefone[1]);