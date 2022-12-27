const alunos = [{
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
        ]}
    },
    {
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
        ]}
    }
];

console.log(alunos[0]);

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: [
        "1155555550",
        "2266666660"
    ],
    enderecos: [{
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }, {
        rua: "R. Gaivota",
        numero: 2022,
        apartamento: false,
        complemento: "casa branca",
    }, {
        rua: "R. Gavião",
        numero: 1990,
        apartamento: false,
        complemento: "portão amarelo",
    }]
};

const apenasCasas = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === false
);

console.log(apenasCasas);