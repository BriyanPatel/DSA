// Number of rows and columns
const rows = 6;
const columns = 6;

// Loop to create the pattern
for (let i = 1; i < rows; i++) {
  let rowPattern = "";  // Initialize an empty string for each row

  for (let j = 0; j < i; j++) {
    rowPattern += "*";  // Append an asterisk for each column
  }

  console.log(rowPattern);  // Print the row pattern
}
