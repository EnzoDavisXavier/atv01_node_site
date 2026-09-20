import express from 'express' // Importando o framwork express

// Router(): método do express para criar rotas
const rota = express.Router();


rota.get("/artista", (req, res) =>{
    
    
    const artista =[
    {
        nome: "Tyler, The Creator", nacionalidade: "Americano", nascimento: "06/03/1991"
    },
    {
        nome: "Kendrick Lamar", nacionalidade: "Norte-Americano", nascimento: "17/06/1987"
    },
    {
        nome: "MF DOOM", nacionalidade: "Britânico", nascimento: "13/07/1971"
    },
    {
        nome: "Matchola", nacionalidade: "Brasileiro", nascimento: "1o/05/2000"
    },
    {
        nome: "Westside Gunn", nacionalidade: "Americano", nascimento: "27/07/1982"
    }
];

    res.render('artista',{
    //Enviando a lista de produtos para a página
        artista:artista,
    });
});

// Exportando o módulo
export default rota;