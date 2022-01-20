let spins = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let x = 0; x < spins.length; x++) {
  if (x === spins.length - 1) {
    setTimeout(() => {
      process.stdout.write(`\r${spins[x]}\n`);
    }, 400 + (x * 300));
  } else {
    setTimeout(() => {
      process.stdout.write(`\r${spins[x]}   `);
    }, 400 + (x * 300));
  }
}
 //
