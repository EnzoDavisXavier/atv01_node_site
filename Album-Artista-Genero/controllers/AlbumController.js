import express from 'express' // Importando o framwork express

// Router(): método do express para criar rotas
const rota = express.Router();


rota.get("/album", (req, res)=>{

      const album = [
    {
        titulo: "IGOR", artista: "Tyler, The Creator", ano: 2019
    },
    {
        titulo: "SATURATION", artista: "BROCKHAMPTON", ano: 2017
    },
    {
        titulo: "Mm..Food", artista: "MF DOOM", ano: 2004
    },
    {
        titulo: "Ok Tchola", artista: "Matchola", ano: 2024
    },
    {
        titulo: "Pray for Paris", artista: "Westside Gunn", ano: 2020
    }
];
        res.render("album",{
            album: album,
        })
})

export default rota;