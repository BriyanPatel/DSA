let rows = 7;
for (let i = 1; i < rows; i++) {
  let pattern = ""; // initialise empty pattern
  for (let j = 6; j > i; j--) {
    pattern += rows-j;
  }
  console.log(pattern); // print the pattern
}
