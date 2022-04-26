/*
Conceptual description: it's a combination of merging and sorting. divide and conqure approach(we split up the larger arr into smaller subArray until we get to zero or one element arr, then we merge them together)
Time Complexity: O(nLognn) 
Space Complexity:O(n)
*/

// this method Finished in 0.015 seconds;
const merge = (left, right) => {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        arr.push(left[0] > right[0] ? right.shift() : left.shift())
    }
    
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}
export const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
} 

// mergeSort([5,3,4,1]);

// we finish sorting the left side and then move on to the right side to sort.

// spliting=========================
//          [5,3,4,1]
//      [5,3]        [4,1]
// [5] [3]                 [4] [1]
// merge============================
//  [3,5]                    [1,4]
//            [1,3,4,5]