//Exercise 1
const numbers = [9, 8, 3, 5, 6, 2, 7, 9];
// Expected result: 8
function findSecondLargest(arr) {
    let maxNum = -Infinity; 
    let secondMax = -Infinity;
    for (const num of arr) {
        if (num > maxNum) {
            secondMax = maxNum;
            maxNum = num;
        } else if (num > secondMax && num < maxNum) {
            secondMax = num;
        }
    }
    return secondMax;
}
console.log(findSecondLargest(numbers));
//Exercise 2
const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];

// Step 1 & 2: [15, 2, 8, 10, 11, 5, 9]
// Step 3: Quick Sort -> [2, 5, 8, 9, 10, 11, 15]
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
function mergeAndSort(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    let map = {};
    for (const num of mergedArray) {
        if(map[num]) {
            continue;
        } else {
            map[num] = true;
        }
    }
   
    return quickSort(Object.keys(map).map(Number));
    
}
console.log(mergeAndSort(classA, classB));