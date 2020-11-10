sum = (numList, divisor = 5) => {
  let total = 0;
  for (i in numList) {
    if (numList[i] % divisor == 0)
      total += numList[i];
  }
  return total;
}
