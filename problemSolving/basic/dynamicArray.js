function dynamicArray(n, queries) {
  // Write your code here
  let lastAnswer = 0;
  const seqList = Array.from({ length: n }, () => []);

  const results = [];

  for (const [queryType, x, y] of queries) {
    const seqIndex = (x ^ lastAnswer) % n;

    console.log(`seqList - ${seqList}`,y);

    if (queryType === 1) {
      seqList[seqIndex].push(y);
    } else if (queryType === 2) {
      const value = seqList[seqIndex][y % seqList[seqIndex].length];
      lastAnswer = value;
      results.push(lastAnswer);
    }
  }
  console.log(results);

  return results;
}

const queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1],
  ],
  n = 2,
  q = 5;
dynamicArray(n, queries);
