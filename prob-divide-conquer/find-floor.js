function findFloor() {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return arr[mid]; // Exact match found; it is the floor.
      }
  
      if (arr[mid] < x) {
        floor = arr[mid]; // Update the floor if mid is smaller than x.
        left = mid + 1;    // Search in the right half.
      } else {
        right = mid - 1;   // Search in the left half.
      }
    }
  
    return floor;
}

module.exports = findFloor