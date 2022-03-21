/*
Conceptual description: it finds a minimum and swap it at the end and put it at the begining.
Time Complexity: O(n^2)
Space Complexity:O(1)
*/

// this method Finished in 0.014 seconds
export const selectionSort = (arr) => {
    
    for(let i = 0; i < arr.length; i++){
        // store the first element (index) as the smallest value
        let lowest = i;  /* lowest = 0 */
        // compare lowest(2) to the next item in the array until you find a smaller number
        for(let j = i + 1; j < arr.length; j++){

            if(arr[j] < arr[lowest]){ /* (22 < 34) */
                // if a smaller number is found, set that smaller number to be the new lowest and continue until the end of array
                lowest = j; /* lowest = 1 */
            }
        }
        // if the lowest is not the index you initially began with, swap the two values
        if(i !== lowest){
            // console.log('****');
            // console.log('before swapping', arr);
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            // console.log('after swap', arr);
            // console.log('****');
        }
    }
    return arr
}

selectionSort([34,22,1,10,5])

// differenc between bubble sort and selection sort:
// in bubble sort we're swapping over and over to get the largest item to the end
// in selection sort, we iterate and compare a lot but we only make one swap at the end of each loop
