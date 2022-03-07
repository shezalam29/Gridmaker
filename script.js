let numRows = 0
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    //alert("Clicked Add Row")

    // Stores grid element object 
    let grid = document.getElementById("grid");

    // Stores live collection of rows
    let rows = document.getElementsByTagName("tr");
    
    // Creates tr element, stores in row 
    let row = document.createElement("tr");

    // Base case if no grid exists yet 
    if (rows.length === 0){
        // Creates one box 
        let col = document.createElement("td");
        col.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        numCols++;
    }

    // For every column, creates a new box; essentially creating a new row
    else{
        
        for (let i = 0; i < numCols; i++){
            let col = document.createElement("td");
            col.onclick = function(){
                this.style.backgroundColor = colorSelected;
            };
            row.appendChild(col);
        }
    }

    grid.appendChild(row);
    numRows++;
}

//Add a column
function addC() {
    //alert("Clicked Add Col")

    // Stores NodeList of tr elements 
    let row = document.querySelectorAll("tr");

    // Base case if no grid exists yet 
    if (numRows === 0){
        addR();
    }

    // For every row, creates a new box; essentially creating a new column 
    for (let j = 0; j < numRows; j++){
        let col = document.createElement("td");
        col.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
        row[j].appendChild(col);
    }
    numCols++
}
    

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
