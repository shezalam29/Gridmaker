let numRows = 0
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    // Stores grid element object 
    let grid = document.getElementById("grid");
    // Stores live collection of rows
    let rows = document.getElementsByTagName("tr");

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

    // For every column, creates a new box 
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
