function twoSum(arr, target) {
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i +1;  j < arr.length; j++) {
            if (arr[i] + are[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}


let sample = [3, 5, 7, 8, 9]