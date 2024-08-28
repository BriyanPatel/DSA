// Number of rows and columns
const rows = 4;
const columns = 4;

// Loop to create the pattern
for (let i = 0; i < rows; i++) {
  let rowPattern = "";  // Initialize an empty string for each row

  for (let j = 0; j < columns; j++) {
    rowPattern += "*";  // Append an asterisk for each column
  }

  console.log(rowPattern);  // Print the row pattern
}
