//OPG 2A
//Jeg laver en eventlistener som bruger table og button1 id og button1 gemmer den pga display=none og table=block gør at vi vil se table
addEventListener("click", () => {
    document.getElementById("button1").style.display="none"; 
    document.getElementById("table").style.display="block"; 
})

//Jeg indsætter dataerne som blev brugt i OPG 1c
let besætning = [
    { kategori: "Køer", antal: 50 },
    { kategori: "Hunde", antal: 1 },
    { kategori: "Grise", antal: 100 },
    { kategori: "Får", antal: 20 },
];

//Herefter laver jeg en funktion som looper igennem besætning array og laver det om til et table
function buildTable (data){
    var table = document.getElementById("table")

    for(var i = 0; i < data.length; i++){
        var row = `
                    <tr>
                        <td>${data[i].kategori}</td>
                        <td>${data[i].antal}</td>
                     </tr>`
        table.innerHTML += row;
    }
}

//til sidst kalder jeg funktionen med besætning array i og der laves dermed et table ud af dette array
buildTable(besætning)



