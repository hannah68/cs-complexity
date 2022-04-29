/*
Conceptual description: first we scatter elements into buckets then sort the elements in each bucket. A distributed sorting algorithm that separates the elements into different buckets, or smaller arrays, and then uses a simpler sorting algorithm to sort each bucket. This algorithm works best when the elements can be distributed into even buckets. If the elements are largely sparse, then using more buckets is better, and vice versa.
Time Complexity: Best: O(n + k), Worst: O(n^2)
Space Complexity: O(n + k)
*/
// You should normally only use bucket sort when you generally know that elements will be evenly distributed, and when memory usage is not an issue.

//   Find max value
//   Create amount of buckets
//   Push values to correct buckets 
//   Sort buckets

import { insertionSort } from './insertionSort.mjs';

export const bucketSort = (array) => {
    const max = Math.max(...array);

    const numBuckets = Math.floor(Math.sqrt(max));

    const buckets = Array.from({ length: numBuckets },() => []);

    array.forEach(val => {
      const index = Math.floor(((numBuckets * (val - 1)) / max));
      buckets[index].push(val);
    });

    //console.log('bucks 2', max, numBuckets, buckets)
    /*
    //standard for loop solution
    let sortedArray = [];
    buckets.forEach(bucket => {
      const sorted = insertionSort(bucket);
      sortedArray = [...sortedArray, ...sorted];
    })
    return sortedArray;
    */

    const sortedArray = buckets.reduce((accArray, bucket) => {
      const sorted = insertionSort(bucket);
      return [...accArray, ...sorted]
    }, []);
    return sortedArray;

    //A succinct version of the same reducer logic as above, but calling internal sort
    //return buckets.reduce((accArray, bucket) => [...accArray, ...bucket.sort((a, b) => a - b)], []);
}

// bucketSort([9,3,2,11])

