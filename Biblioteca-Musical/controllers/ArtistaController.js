import express from 'express' 

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
        artista:artista,
    });
});

export default rota;