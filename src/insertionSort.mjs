/*
Conceptual description:it builds up the sort by gradually creating a larger left half which is always sorted (it takes each element one at the time and places it where it should go (in the correct spot)in the sorted half.)
Time Complexity: Best case: O(n), Worst case: O(n^2)
Space Complexity: O(1)
*/
// this method Finished in 0.021 seconds;
export const insertionSort = (arr) => {
    // start by picking the second element in the array
    for ( let i = 1; i < arr.length; i++ ) {
        for ( let j = i; j >= 0; j-- ) {
            // now compare the second element with the one before it and if it's in the incorrect order, iterate through the sorted portion(left side) to place the element in the correct place.
            if ( arr[ j - 1 ] > arr[ j ] ) {
                // console.log('before swap', arr);
                
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                
                // console.log('after swap', arr)
            } else {
                break
            }
        }
    }
    return arr
}

// [5,3,4,1]
// [3,5,4,1]
// [3,4,5,1]
// [1,3,4,5]

insertionSort([5,3,4,1])


