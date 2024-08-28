// Number of rows for the pyramid
const rows = 5;

// Outer loop for the number of rows
for (let i = 1; i <= rows; i++) {
  let rowPattern = ""; // Initialize an empty string for each row

  // Inner loop for spaces (decreasing)
  for (let j = 1; j <= rows - i; j++) {
    rowPattern += " "; // Add space for alignment
  }

  // Inner loop for stars (increasing)
  for (let k = 1; k <= 2 * i - 1; k++) {
    rowPattern += "*"; // Add stars to form the pyramid
  }

  console.log(rowPattern); // Print each row
}

/** 
 *  Output
 
    *
   ***
  *****
 *******
*/