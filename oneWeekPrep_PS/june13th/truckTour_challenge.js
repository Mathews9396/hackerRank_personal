const input = [
  [4, 3],
  [1, 5],
  [7, 3],
  [3, 4],
];

function truckTour(petrolpumps) {
  // Write your code here
  const N = petrolpumps.length;
  let petrolStatus;
  for (let i = 0; i < N; i++) {
    petrolStatus = true;
    let petrolInTank = petrolpumps[i][0] - petrolpumps[i][1];
    if (petrolInTank < 0) continue;

    let j = i + 1;

    while (j != i) {
      if (j >= N) {
        j = 0;
      }

      petrolInTank += petrolpumps[j][0] - petrolpumps[j][1];

      if (petrolInTank < 0) {
        petrolStatus = false;
        break;
      }
      j++;
    }
    if (petrolStatus) return i;
  }
}

const result = truckTour(input);
console.log(`Final output- ${result}`);
