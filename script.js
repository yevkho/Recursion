//A) FIBONACCI
//iteration
function fibs(n) {
  let arr = [0, 1];
  let a = 0;
  let b = 1;

  if (n == 0 || n == undefined) {
    return (arr = []);
  } else if (n == 1) {
    return (arr = [a]);
  } else if (n == 2) {
    return (arr = [a, b]);
  }

  for (let i = 2; i < n; i++) {
    let c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }
  return arr;
}

//recursion
function fibsRec2(n) {
  let arr = [0, 1];

  if (n == 0) return 0;
  if (n == 1) return 1;

  arr[n] = fibsRec(n - 1) + fibsRec(n - 2);
  return arr;
}

function fibsRec(n) {
  // Base cases
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  // Recursive call to get the previous array of Fibonacci numbers
  const arr = fibsRec(n - 1);

  // Add the next Fibonacci number to the array

  return [...arr, arr[n - 1] + arr[n - 2]];
  //or
  arr.push(arr[n - 1] + arr[n - 2]);
  return arr;
}

//B MERGE SORT
///////////////// [0, 1, 2, 3];
const testArray = [4, 3, 2, 1];

console.log(mergeSort(testArray));

function mergeSort(baseArr) {
  const l = 0;
  const h = baseArr.length - 1;
  return sort(baseArr, l, h);
}

function sort(baseArr, l, h) {
  // baseArr = [0, 1, 2, 3]
  // 1st l = 0; h = 3; m = 1
  if (l == h) return; //base-case

  let m = Math.floor((l + h) / 2); //recursive-case
  sort(baseArr, l, m); //left (0,0)
  sort(baseArr, m + 1, h); //right (1,1)
  merge(baseArr, l, m, h); //(0,0,1)
  return baseArr;
}

function merge(baseArr, l, m, h) {
  // baseArr = [0, 1, 2, 3]
  // 1st l = 0; h = 1; m = 0
  let tempArr = [];
  let i = l; //0
  let j = m + 1; //1
  let k = 0;

  while (i <= m && j <= h) {
    if (baseArr[i] < baseArr[j]) {
      tempArr[k++] = baseArr[i++];
    } else {
      tempArr[k++] = baseArr[j++];
    }
  }

  while (i <= m) {
    tempArr[k++] = baseArr[i++];
  }
  while (j <= h) {
    tempArr[k++] = baseArr[j++];
  }

  for (let i = l; i <= h; i++) {
    baseArr[i] = tempArr[i - l];
  }
}
