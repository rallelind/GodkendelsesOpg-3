document.getElementById("button1").addEventListener("click", () => {
    document.getElementById("button1").style.display="none"; 
    document.getElementById("table").style.display="block"; 
})

let besætning = [
    { kategori: "Køer", antal: 50 },
    { kategori: "Hunde", antal: 1 },
    { kategori: "Grise", antal: 100 },
    { kategori: "Får", antal: 20 },
];

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

buildTable(besætning)



