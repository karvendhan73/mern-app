function getNoOfMissingValues(arr: number[]) {
  return arr.filter((v) => v === 0).length;
}
function getSum(arr: number[]) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/**
 * Computes the given row1 and row2 arrays and returns true if a matching sum can be obtained, -1 otherwise.
 */
function determineMatchingSum(row1: number[], row2: number[]) {
  const row1NoOfMissingValues = getNoOfMissingValues(row1);
  const row2NoOfMissingValues = getNoOfMissingValues(row2);
  const row1Sum = getSum(row1);
  const row2Sum = getSum(row2);

  if (row1NoOfMissingValues > 0 || row2NoOfMissingValues > 0) {
    let maxSum = 0;
    let diff = 0;
    let noOfTargetRowMissingValues = 0;

    if (row1Sum > row2Sum) {
      maxSum = row1Sum + row1NoOfMissingValues;
      diff = maxSum - row2Sum;
      noOfTargetRowMissingValues = row2NoOfMissingValues;
    } else {
      maxSum = row2Sum + row2NoOfMissingValues;
      diff = maxSum - row1Sum;
      noOfTargetRowMissingValues = row1NoOfMissingValues;
    }
    if (diff < 10 && noOfTargetRowMissingValues > 0 && noOfTargetRowMissingValues <= diff) {
      return maxSum;
    }
  } else if (row1Sum === row2Sum) {
    return row1Sum;
  }

  return -1;
}

export default determineMatchingSum;
