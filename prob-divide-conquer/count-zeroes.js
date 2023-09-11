function countZeroes() {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;

    while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      // If the mid element is 0, increment the count and search in the left half.
      count++;
      right = mid - 1;
    } else {
      // If the mid element is 1, search in the right half.
      left = mid + 1;
    }
  }

  return count;
  
}

module.exports = countZeroes