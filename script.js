let numRows = 0
let numCols = 0;
let colorSelected; 

//Add a row
function addR(){
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
function addC(){
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
function removeR(){
    //alert("Clicked Remove Row")

    // Stores grid element object 
    let grid = document.getElementById("grid");

    // Stores live collection of rows
    let rows = document.getElementsByTagName("tr");

    // If there is nothing to delete, alert user
    if (rows.length === 0){
        alert("There is nothing to delete")
        numRows = 0;
        numCols = 0; 
    }
    // Remove the grid's last child element which is the last row
    else{
        grid.removeChild(grid.lastElementChild);
        // Another way to do it is -> grid.deleteRow(numRows-1);
        numRows--;
    }   
}

//Remove a column
function removeC(){
    //alert("Clicked Remove Col")

    // Stores grid element object 
    let grid = document.getElementById("grid");

    // Stores live collection of cols
    let cols = document.getElementsByTagName("td");

    // If there is nothing to delete, alert user
    if (cols.length === 0){
        alert("There is nothing to delete");
        numRows = 0; 
        numCols = 0; 
    } 
    
    // Otherwise, for every row, remove the tr's last child element, the last td
    // Overall, removes the last column  
    if (numCols > 0){
        numCols--;
         for (let i = 0; i < numRows; i++){
             let rows = grid.rows[i];
             rows.removeChild(rows.lastElementChild);
         }
        
    }
    // Once zero columns reached, reset rows as well
    else if (numCols === 0){
        grid.innerHTML = "";
        numRows = 0; 
    }
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    //alert("Clicked Fill All")

    // Gets a live list of every td element and stores them into cells
    cells = document.querySelectorAll('td');

    // For every cell in that list, changes the background color to the selected color 
    for (const cell of cells){
        cell.style.backgroundColor = document.getElementById("selectedID").value;
    }
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
