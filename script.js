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
app.get('/returner_hele_besaetning/', (req, res) => {
    res.status(200).send(besætning);
});


//opg 1d
/*her laver jeg en get funktion som kun sender den givne kategori tilbage.
først laver jeg en funktion "findBesætning" som bruger find metoden til at kigge igennem besætning array.
dernæst laver jeg en anonym funktion som kigger "kategori igennem".
derefter laver jeg et if statement som tjekker om den givne værdi er i "findBesætning" og hvis den ikke er vil den give en fejl.
til sidst sender jeg "findBesætning" og jeg kan nu skrive den ønskede kategori og dermed viser den ikke hele besætningen.
*/
app.get("/returner_antallet_af_dyr_for_en_kategori/:kategori", (req, res) => {
    const findBesætning = besætning.find(c => c.kategori === req.params.kategori);
    if (!findBesætning) return res.status(404).send("Forkert givet kategori");
    res.send(findBesætning);
}) 


//Opg 1e
//bruger .use express json så jeg kan ændre i mine dataer i postman
app.use(express.json())

//Jeg laver en put funktion og genbruge koden fra 1d som validere om det er den rigtige kategori
app.put("/returner_hele_besaetning/:kategori/", (req, res) => {
    const findBesætning = besætning.find(c => c.kategori === req.params.kategori);
    if (!findBesætning) return res.status(404).send("Forkert givet kategori");

    //Opdatere antal og sender. Hermed kan jeg i postman eksempelvis ændre data.
    findBesætning.antal = req.body.antal
    
    //Til sidst sender jeg
    res.send(findBesætning)
})

//Opg 1f
//Jeg laver en .delete funktion og igen genbruges koden fra 1d til validerings mekanisme
app.delete("/returner_hele_besaetning/:kategori", (req, res) => {
    const findBesætningen = besætning.find(c => c.kategori === req.params.kategori);
    if (!findBesætningen) return res.status(404).send("Forkert givet kategori");

    //Delete gør jeg ved først at bruge indexof metoden og dernæst .splice til at fjerne det ønskede index og hermed kan jeg ændre i data
    const index = besætning.indexOf(findBesætningen)
    besætning.splice(index, 1);

    //Til sidst sender jeg
    res.send(findBesætningen);
})


app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});