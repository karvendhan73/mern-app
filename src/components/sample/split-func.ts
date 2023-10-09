function getSum(arr: number[]) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
function splitNumber(num: number, parts: number) {
  const minN = Math.floor(num / parts);
  const arr = Array.from({ length: parts }, () => minN);

  if (getSum(arr) === num) return arr;

  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
    if (getSum(arr) === num) return arr;
  }

  return [];
}

export default splitNumber;
