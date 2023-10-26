function heapSort(arr) {
  // Build a max heap from the array
  buildMaxHeap(arr);

  // Perform the heap sort
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap the root (maximum element) with the last element of the heap
    [arr[0], arr[i]] = [arr[i], arr[0]];
    
    // Call maxHeapify on the reduced heap
    maxHeapify(arr, 0, i);
  }

  return arr;
}

function buildMaxHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    maxHeapify(arr, i, n);
  }
}

function maxHeapify(arr, i, heapSize) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    // Swap arr[i] and arr[largest]
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // Recursively heapify the affected sub-tree
    maxHeapify(arr, largest, heapSize);
  }
}

// Example usage:
const arrayToSort = [4, 10, 3, 5, 1];
const sortedArray = heapSort(arrayToSort);
console.log(sortedArray); // [1, 3, 4, 5, 10]
