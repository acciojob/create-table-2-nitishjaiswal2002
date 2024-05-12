function createTable() {
    // Prompt for the number of rows
    const numRows = parseInt(prompt("Input number of rows"));
    if (isNaN(numRows) || numRows <= 0) {
        alert("Please enter a valid number of rows.");
        return;
    }

    // Prompt for the number of columns
    const numCols = parseInt(prompt("Input number of columns"));
    if (isNaN(numCols) || numCols <= 0) {
        alert("Please enter a valid number of columns.");
        return;
    }

    // Get the table element
    const table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = "";

    // Create rows and columns
    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < numCols; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
