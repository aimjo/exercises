function findRotatedIndex() {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
        return mid;
        }
        // Check if the left half is sorted.
        if (arr[left] <= arr[mid]) {
        if (arr[left] <= num && num < arr[mid]) {
            right = mid - 1; // Search left half.
        } else {
            left = mid + 1; // Search right half.
        }
        } else {
        if (arr[mid] < num && num <= arr[right]) {
            left = mid + 1; // Search right half.
        } else {
            right = mid - 1; // Search left half.
        }}
    }

  return -1; 
}

module.exports = findRotatedIndex