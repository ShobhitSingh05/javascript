import { MinHeap, MaxHeap } from '@datastructures-js/heap';

const kThSmallest = (arr, n, k) => {
  let maxyHeap = new MaxHeap([]);

  for (let i = 0; i < n; i++) {
    maxyHeap.push(arr[i]);

    if (maxyHeap.size() > k) {
      maxyHeap.pop();
    }
  }

  return maxyHeap.top();
};

console.log(kThSmallest([7, 2, 3, 5, 8, 9], 6, 3));
