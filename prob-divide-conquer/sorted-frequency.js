function sortedFrequency() {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;
    let lastOccurrence = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
        firstOccurrence = mid;
        right = mid - 1;
        } else if (arr[mid] < target) {
        left = mid + 1;
        } else {
        right = mid - 1;
        }
    }

    left = 0;
    right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
        lastOccurrence = mid;
        left = mid + 1;
        } else if (arr[mid] < target) {
        left = mid + 1;
        } else {
        right = mid - 1;
        }
    }

  if (firstOccurrence === -1) {
    return -1; // not in the array.
  }

  return lastOccurrence - firstOccurrence + 1;

}

module.exports = sortedFrequency