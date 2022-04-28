/*
Conceptual description: first find the maximum number, then we have to calculate how many desserts has this max number. so our number is 391 with 3 dessert. now we have to make all the other numbers 3 dessert number. where we have to put zero on a number?
so the number will be: 
=> 089 003 391 002 011
base for decimal number is 10, so I'm going to take 10 bucket (for sorting string the base is 26).
we strat filling the bucket by the least significant digit(it means for example from number 391 => the least will be 1, from 652 the leaset will be 2)

buckets: 0      1          2      3   4  5   6  7  8   9 
parse1:     391 011       002   003                   089

then we have to remove these numbers from these buckets. starting from zero bucket(if we have two numbers inside one  bucket, we have to remove the first number first)
so the data eill be: 
    => 391, 011, 002, 003, 089

in the second parse we have to check the second dessert.
buckets: 0          1    2 3 4 5 6  7   8          9 
parse2 : 002,003   011                 089         391

so then remove numbers from buckets from zero bucket => 
so the data eill be: 
    => 002, 003, 011, 089, 391
then we parse based on the third digit:

bucket: 0                1 2  3    4 5 6 7  8 9 
parse3: 002,003,011,089      391      

so our final sorted array will be:
[2, 3, 11, 89, 391]

b= base, d=digit, n=length of arr
time complexity: o( d * ( n + b ))
space complexity: o(n + d)
*/

// this function gives us the number in specific place
const getDigit = (num, place) => {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};
// console.log(getDigit(43263, 0)) // 3

// this functions counts how many digits are in each number
const digitCount = (num) => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};
//   console.log(digitCount(0)) // 1
//   console.log(digitCount(21)) // 2

// this function take an array of numbers, loop over them and keep track of the digit count of the largest number:
const mostDigits = (nums) => {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
};
//   console.log(mostDigits([44, 849, 1, 3333])) // 4 (because 3333 has four digits)

export const radixSort = (array) => {
	// Find the number in the array with the most digits.
	let maxDigitCount = mostDigits(array);
	console.log(maxDigitCount);

	// Loop from k = 0 up to this max digit count
	for (let k = 0; k < maxDigitCount; k++) {
		// Create an array of ten empty arrays: [[], [], [], [], [], [], [], [], [], []] - a bucket for each possible digit, from 0 to 9.
		let digitBuckets = Array.from({ length: 10 }, () => []); // [[], [], [],...]
		console.log(digitBuckets);
        // Put each number in its corresponding bucket based on its digit at the kth place.
		for (let i = 0; i < array.length; i++) {
			let digit = getDigit(array[i], k);
			digitBuckets[digit].push(array[i]);
		}
        // Replace the existing array of numbers with the values in the buckets, starting from 0 and going up to 9.
		// New order after each loop
		array = [].concat(...digitBuckets);
	}
	return array;
};

