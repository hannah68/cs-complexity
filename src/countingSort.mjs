/*
Conceptual description:It's not comparison sort. we sort the array according to the keys. we count the number of elements having distinct key values. 
imagine we have this : let array = [1,0,2,2,0,1,1,6,7] => n=9
just find the max element in the array => k = 7 => range would be 0-7
index => 0 1 2 3 4 5 6 7 8
value => 1 0 2 2 0 1 1 6 7

index => k   => 0 1 2 3 4 5 6 7
count => k+1 => 2 3 2 0 0 0 1 1 (count how many time 0 is repeated in our original array)

count the actual position of elements:(this loop start from 1)
count         =>  2     3           2      0 0 0 1 1
updated count =>  2  (2+3)=5     (5+2)7    7 7 7 8 9

create a new arr called b(size of original array): we start from end of original array(7), find index of 7 on updated count array which is 9, then we decrement  1 from the 9 (9-1)= 8 => so number 7 should be placed in sorted array index of 8. (when you're going backward if you came across a repeated number for example in our array after number 6 we have two number one: find index of number one in updated count which is 5. then we decrement by one (5-1)=4, so we placed number 1 to the index of 4 in sorted array, but then again we have number one, this time we say (5-1)= 4 and we decrement again so it will be 4-1=3 , so the second number 1 will be placed in index of 3 of sorted array).
unsorted original array = [1,0,2,2,0,1,1,6,7];
updated count:            [2,5,7,7,7,7,8,9]
sorted array b:           [-,-,-,-,-,-,-,-,7]

[0,0,1,1,1,2,2,6,7]
                  
Time Complexity: o(n)
Space Complexity:
*/
export const countingSort = (array) => {
	// find the max number
	const maxValue = Math.max(...array);
	// create an array with empty place (based on the max number)
	// then fill all the places with 0
	const counts = new Array(maxValue + 1).fill(0);
	console.log(counts);

	// it count the number of times our counts index repeated based on our array
	for (let item of array) {
		counts[item]++;
	}
	// it gives us [2,5,7,7,7,7,8,9]
	for (let i = 1; i <= counts.length - 1; i++) {
		counts[i] = counts[i] + counts[i - 1];
	}
	// create a sorted array with 0 filled
	const sortedArray = new Array(array.length).fill(0);
	// loop through array and start from the end
	for (let i = array.length - 1; i >= 0; i--) {
		sortedArray[--counts[array[i]]] = array[i];
	}
	return sortedArray;
};
