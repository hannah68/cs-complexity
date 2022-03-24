/*
Conceptual description: 
Time Complexity: worst case: o(n2), best case: O(nlogn)
Space Complexity: O(logn)
*/

const pivot = (arr, start = 0, end = arr.length + 1) => {
    // const swap = (arr,idx1, idx2) => {
    //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    // };
    const swap = (arr, idx , i) => {
        let temp = arr[idx]; /* temp = 6 */
        arr[idx] = arr[i]; /* 6 = 1 */
        return arr[i] = temp; /* 1 = temp */
    }
    // assuming the pivot is always the first element
    let pivot = arr[start];/* 4 */
    // keep track of how many numbers are less than the pivot number(where we're gonna swap this number at the end)
    let swapIdx = start; /* 0 => it should return 2 because there are two numbers less than 4 in our example */

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            // swap(arr, 1, 3)
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, start, swapIdx); /* [ 2, 1, 4, 6, 9 ]  4 will be in the right place*/
    return swapIdx;
}


export const quickSort = (arr, left = 0, right = arr.length - 1) => {
    
    if(left < right){
        let pivotIndex = pivot(arr, left, right); /* pivot(arr, 0, 4) => return 2*/
        // we'll sort the left side without including pivot because it's already in it's place
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr
} 

// [4,6,9,1,2]
// move all numbers that are greater than 4 on the right and all numbers that are less than 4 to the left isde.
// so basically we count how many numbers are less than 4 which is 1 in this case and move the 4 to the correct spot.
// the order of elements on either side of the pivot doesn't matter.we're not making new arrays.
// the runtime of quick sort can change depending on where you pick the pivot from.
// 1: first pick 4: there are 1 number less than and two number greater than 4 ,so:

// [4, 6, 9, 1, 2]
// let pivot = 4 , swap=0
// i=1 => 4>6  no
// i=2 => 4>9  no
// i=3 => 4>1  yes=> so swap++ =>  // swap(arr, 1, 3)
// [4, 1, 9, 6, 2]
// [ 4, 1, 2, 6, 9 ]
// [ 2, 1, 4, 6, 9 ]
// [1, 2, 4, 6, 9 ]
//.... at the end we hve [1, 2, 4, 6, 9]



