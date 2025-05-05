const generateBtn = document.querySelector("#generateBtn");
const tableContainer = document.querySelector(".table-container");

generateBtn.addEventListener("click", ()=>{
    const row = parseInt(document.getElementById("rows").value);
    const column = parseInt(document.querySelector("#columns").value);

    if(isNaN(row) || isNaN(column)){
        alert("Please enter a valid number");
        return;
    }

    tableContainer.innerHTML = '';

    const table = document.createElement("table");
    //header row

    const headerRow = document.createElement("tr");
    for(let i = 0; i < column; i++){
        const th = document.createElement("th");
        th.textContent = `Column ${i+1}`;
        headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    for(let i = 0; i < row; i++){
        const tr = document.createElement("tr");
        for(let j = 0; j < column; j++){
            const td = document.createElement("td");
            td.textContent = `Row ${i+1} Column ${j+1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
});