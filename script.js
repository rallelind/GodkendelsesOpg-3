//OPG 1

//opg 1a
//starter med at hente express ned og benytter require så den ved jeg ønsker at benytte express
const express = require("express")
const app = express()

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server lytter på http://localhost:${PORT}`);
})

//opg 1b
//laver en var med de givne dataer
var besætning = {
    "Køer": "50",
    "Hunde": "1",
    "Grise": "100",
    "Får": "20"
}

//opg 1c
//laver en get funktion der returnere besætning
app.get('/returner_hele_besaetning/', (req, res, next) => {
    res.status(200).send(besætning);
}) 


