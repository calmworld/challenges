function twoSum(arr, target) {
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i +1;  j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
// Output [ 0, 1 ]


/////////
//Improved solution with Hash/Object in O(n) time
/////////

const twoSum_On_Better = (arr, target) => {
	let numObject = {};
	for (let i = 0; i < arr.length; i++) {
		let thisNum = arr[i];
		numObject[thisNum] = i;
	}
	for (var i = 0; i < arr.length; i++) {
		let diff = target - arr[i];
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
			return [i, numObject[diff]];
		}
	}
}
console.log(twoSum_On_Better([2, 7, 11, 15], 9));
// Output [ 0, 1 ]






//https://paulrohan.medium.com/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03