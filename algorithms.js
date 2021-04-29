function addNumUpTo(num) {
    let total = 0;
    for(let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
   //return num * (num + 1) / 2 ;
}

let t1 = performance.now();
addNumUpTo(1000000);
let t2 = performance.now();
console.log(`${(t2 - t1) / 1000 }`);

function countUpAndDown(n) {
    for(let i = 0; i <= n; i++)
        console.log(i);           
    for(let j = n - 1; j > 0; j--)
        console.log(j);   
}

countUpAndDown(8);

function printAllPairs(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) 
        console.log(i, j);
    }
}

printAllPairs(7);

function logAtLeast5(n) {
    for(i = 0; i < (Math.max(5, n)); i++)
    console.log(i);
}

logAtLeast5(3);

function logAtMost5(n) {
    for(i = 1; i <= Math.min(5, n); i++)
    console.log(i);
}

logAtMost5(3);

function sumOfArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
        sum += arr[i];       
    return sum;
}

sumOfArray([1, 2, 67, 12, 20, 3, 4, 5, 90]);

function doubleArray(arr) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++)
        newArray.push(2 * arr[i]);
    return doubleArray;
}

console.log(doubleArray([1, 4, 0, 5]));

//write a function, which takes in a string and returns count of each character in the string

function characterCount(words) {
    let result = {};
    for(let i = 0; i < words.length; i++) {
        let eachCharacter = words[i];
        if(/a-z0-9/.test(eachCharacter)) {
            eachCharacter.toLowerCase();
            if(result[eachCharacter] > 0) {
                result[eachCharacter]++;
            } else {
                result[eachCharacter] = 1;
            }
        }
    }
    return result;
}

characterCount('words');

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])


function findAddedAge(youngerAge, ageFactor, yearsAhead) {
   let olderAge = youngerAge * ageFactor;
   let futureAge = olderAge + yearsAhead;
   return futureAge; 
}

console.log(findAddedAge(5, 10, 5));

// recursion
function countDown(num) {
    if(num <= 0) {
        console.log("all done");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(5);

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

sumRange(60000);

function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

factorial(5);

function collectOddNum(nums) {

    let oddNumArray = [];
    function recursiveMethod(numValues) {
        if(numValues.length === 0) return;
        if(numValues[0] % 2 !== 0) {
            oddNumArray.push(numValues[0]);
        }
        recursiveMethod(numValues.slice(1));
    }
    recursiveMethod(nums);
    return oddNumArray;
}

function collectOddNum(numValues) {

    let oddNumArray = [];
        if(numValues.length === 0) return oddNumArray;
        if(numValues[0] % 2 !== 0) {
            oddNumArray.push(numValues[0]);
        }
        oddNumArray = oddNumArray.concat(collectOddNum(numValues.slice(1)));
        return oddNumArray;
}


collectOddNum([1, 2, 3, 4, 5, 6]);

function numPos(arr, num) {
    for(let i = 0; i < arr.length; i++) 
        if(arr[i] === num) return i;
    return -1;
}

numPos([1,2,3,4,5,6,7], 1);


function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== value && start <= end) {
        if(arr[middle] > value) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === value ? middle : -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 89, 10], 70);


function nativeSearch(longText, shortText) {
    let count = 0;
    for(let i = 0; i < longText.length; i++) {
        for(let j = 0; j < shortText.length; j++) {
            if(shortText[j] !== longText[i + j]) break;
            if(j === shortText.length - 1) count++;
        }
    }
    return count;
}

nativeSearch("Hello world", "Hel");


// sorting algorithm
// native javascript search

[1, 5, 6, 22, 45, 21, 3].sort((num1, num2) => num2 - num1);
["Hello", "hi there", "he", "her", "here"].sort((val1, val2) => val1.length - val2.length);

function bubbleSort(arr) {
    let noSwaps;
    const swap = (arr, num1, num2) => {
        [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    }

    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
            swap(arr, j, j + 1);
            noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

bubbleSort([1, 4, 2, 0, 3, 12, 90, -3, -5, 2, 10, 89, 1, 3, 5, 6, 7, 8, 9, 10]);

function selectionSort(arr) {

    const swap = (arr, num1, num2) => {
        [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    }


    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j= i+ 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
        //        let temp = arr[i];
        //        arr[i] =  arr[lowest];
        //        arr[lowest] = temp;
            swap(arr, i, lowest);
        }
    }
    return arr;
}

selectionSort([1, 4, 2, 0, 3, 12, 90, -3, -5, 2, 10, 89, 1, 3, 5, 6, 7, 8, 9, 10]);


function insertionMethod(arr) {
  for(let i = 0; i < arr.length; i++) {
      let currentVal = arr[i];
      for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
          arr[j + i] = arr[j];  
      }
      arr[i + 1] = currentVal;
  }
   return arr;
}

insertionMethod([1, 4, 2, 0, 3, 12, 90, -3, -5, 2, 10, 89, 1, 3, 5, 6, 7, 8, 9, 10]);

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] > arr2[j]) {
            results.push(arr2[j]);
            j++;
        } else {
          results.push(arr1[i]);
          i++;  
        } 
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([1, 8, 10, 10, 14, 32, 1, 0, -2, 99, 100]);

// quick sort pivot
 function pivot(arr, start= 0, end= arr.length + 1) {

    function swap(arr, i, j) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);   
    }

    return arr;
}

quickSort([-2, -500, 70, 8, 2, 1, 5, 7, 6, 3] );


function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([1234, 1234, 1234, 17890, 3]);

// fibonacci sequence

function fibonacci(num) {
    if(num === 0) return [];
    if(num === 1) return [0];
    let fibSequence = [0, 1];
    function fibCall(current, end) {        
        if(current === end) return;
        let lastValue = fibSequence[fibSequence.length - 1];
        let nearLastValue = fibSequence[fibSequence.length - 2];
        fibSequence.push(lastValue + nearLastValue);
        current++;
        fibCall(current, end);
    }

    fibCall(2, num);
    return fibSequence;
}

fibonacci(9);