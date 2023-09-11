function findRotationCount() {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // If the array is already sorted, there are no rotations
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length; // Calculate the index of the next element.
  
      // Check if the mid element is smaller than the next element.
      if (arr[mid] <= arr[next]) {
        // If true, rotation occurs after mid, search right half.
        left = mid + 1;
      } else {
        // If false, rotation occurs at mid or before, search left half.
        right = mid;
      }
    }
  
    return -1;
}

module.exports = findRotationCount