//OPG 1

//opg 1a
//starter med at hente express ned og benytter require så den ved jeg ønsker at benytte express
const express = require("express")
const app = express()

//til sidst bruger jeg .listen og laver en funktion så den ved hvilken port den lytter på
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server lytter på http://localhost:${PORT}`);
})

//opg 1b
//laver en variabel med de givne dataer og gemmer den i et array
let besætning = [
    { kategori: "Køer", antal: 50 },
    { kategori: "Hunde", antal: 1 },
    { kategori: "Grise", antal: 100 },
    { kategori: "Får", antal: 20 },
];

//opg 1c
//laver en get funktion der returnere besætning
app.get('/returner_hele_besaetning/', (req, res, next) => {
    res.status(200).send(besætning);
}) 

//opg 1d
/*her laver jeg en get funktion som kun sender den givne kategori tilbage.
først laver jeg en funktion "findBesætning" som bruger find metoden til at kigge igennem besætning array.
dernæst laver jeg en anonym funktion som kigger "kategori igennem".
derefter laver jeg et if statement som tjekker om den givne værdi er i "findBesætning" og hvis den ikke er vil den give en fejl.
til sidst sender jeg "findBesætning" og jeg kan nu skrive den ønskede kategori og dermed viser den ikke hele besætningen.
*/
app.get("/returner_antallet_af_dyr_for_en_kategori/:kategori", (req, res, next) => {
    const findBesætning = besætning.find(c => c.kategori === req.params.kategori);
    if (!findBesætning) res.status(404).send("Forkert givet kategori");
    res.send(findBesætning);
}) 

//Opg 1e
app.put("/returner_hele_besaetning/:antal", (req, res) => {

})