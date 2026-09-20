import express from 'express' 

const rota = express.Router();

rota.get("/genero", (req, res)=>{
    res.render('genero');

        const genero =[
    {
        nome: "Rock",
        descricao: "Gênero musical com destaque para guitarra, baixo e bateria."
    },
    {
        nome: "Pop",
        descricao: "Gênero musical popular e bastante presente nas rádios."
    },
    {
        nome: "Rap",
        descricao: "Gênero baseado principalmente em rimas e ritmo."
    },
    {
        nome: "Sertanejo",
        descricao: "Gênero musical brasileiro ligado à música do interior."
    },
    {
        nome: "Eletrônica",
        descricao: "Gênero que utiliza instrumentos e recursos eletrônicos."
    }
];
    res.render('genero',{
        genero:genero,
    });
})

export default rota;