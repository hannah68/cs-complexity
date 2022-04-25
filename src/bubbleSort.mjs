/*
Conceptual description:it compares adjacent elements in a list and swap their position if they're not in the correct order.
Time Complexity: best case: O(n), worst case: O(n^2)
Space Complexity: O(1)
*/

// this method Finished in 0.012 seconds;
export const bubbleSort = (array) => {
	for (let i = array.length; i > 0; i--) {
		/* first time => i = 4 */
		for (let j = 0; j < i - 1; j++) {
			/* first time => it gives us 3 comparison */
			// console.log(array, array[j], array[j+1]);
			if (array[j] > array[j + 1]) {
				// swap two numbers
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
};

// bubbleSort([9,3,2,11])

// this method Finished in 0.013 seconds; ***************
// if we don't make any swap, don't swap(break);
// export const bubbleSort = (array) => {
//     let noSwap;

//     for(let i = array.length; i > 0; i--){
//         noSwap = true;
//         for(let j = 0; j< i - 1; j++){
//             // console.log(array, array[j], array[j+1]);
//             if(array[j] > array[j+1]){
//                 // swap two numbers
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//                 noSwap = false;
//             }
//         }
//         if(noSwap) break;
//     }
//     return array;
// }

// this method gives us undefined and Finished in 0.013 seconds; **************
// export const bubbleSort = (array) => {
//     let checked;
//     do {
//         checked = false;
//         for (let i = 0; i < array.length; i++) {
//             // console.log(array, array[i],array[i + 1])

//             if (array[i] > array[i + 1]) {
//                 let temp = array[i];
//                 array[i] = array[i + 1];
//                 array[i + 1] = temp;
//                 checked = true;
//             }
//         }
//     } while (checked);
//     return array;
// };