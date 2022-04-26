/*
Time Complexity: worst case: o(n2), best case: O(nlogn)
Space Complexity: O(logn)
*/
// Conceptual description: Uses a divide-and-conquer strategy to break down the problem into simple subproblems until they become simple enough to solve directly. The idea is basically:
// 1. Select an element of the array to be a pivot. Most often this element is either the first or the last element in the array.
// 2. Partition the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot.If an element is equal to the pivot, it doesn't matter on which side it goes.
// 3. Repeat this process individually for the left and right side of the pivot, until the array is sorted.
// Time Complexity: The worst-case time complexity of Quick Sort is O(n^2). The average case time complexity is O(n log n). The weak spot of the Quicksort algorithm is the choice of the pivot. Choosing a bad pivot (one that is greater than/less than most elements) every time, would give us the worst-case time complexity. While repeatedly choosing a pivot that has a roughly equal number of elements that are less than/greater than the pivot would give us a time complexity of O(n log n).
// Space Complexity: In place alternative - O(log n). This one: O(n)


// const pivot = (arr, start = 0, end = arr.length + 1) => {
//     // const swap = (arr,idx1, idx2) => {
//     //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     // };
//     const swap = (arr, idx , i) => {
//         let temp = arr[idx]; /* temp = 6 */
//         arr[idx] = arr[i]; /* 6 = 1 */
//         return arr[i] = temp; /* 1 = temp */
//     }
//     // assuming the pivot is always the first element
//     let pivot = arr[start];/* 4 */
//     // keep track of how many numbers are less than the pivot number(where we're gonna swap this number at the end)
//     let swapIdx = start; /* 0 => it should return 2 because there are two numbers less than 4 in our example */

//     for(let i = start + 1; i < arr.length; i++){
//         if(pivot > arr[i]){
//             swapIdx++;
//             // swap(arr, 1, 3)
//             swap(arr, swapIdx, i)
//         }
//     }

//     swap(arr, start, swapIdx); /* [ 2, 1, 4, 6, 9 ]  4 will be in the right place*/
//     return swapIdx;
// }


// export const quickSort = (arr, left = 0, right = arr.length - 1) => {
    
//     if(left < right){
//         let pivotIndex = pivot(arr, left, right); /* pivot(arr, 0, 4) => return 2*/
//         // we'll sort the left side without including pivot because it's already in it's place
//         quickSort(arr, left, pivotIndex - 1);
//         // right
//         quickSort(arr, pivotIndex + 1, right);
//     }
//     return arr
// } 

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

// steve method:==========================================
export const quickSort = (array) => {
    if(array.length <= 1){
        return array;
    }
    
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for(let i=0; i < array.length-1;i++){
        if(array[i] < pivot){
            leftArr.push(array[i]);
        }
        else{
            rightArr.push(array[i])
        }
    }

    return [...quickSort(leftArr) ,pivot, ...quickSort(rightArr)];
} 


quickSort([4, 6, 9, 1, 2])
