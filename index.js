let array = [54, 6, 1, 20, 65, 72, 31, 8, 0, 54, -2];

// Find max.value
/*
let maxValue = values[0];
let minValue = values[0];
values.forEach(function (value) {
  if (maxValue < value) {
    maxValue = value;
  }
  if (minValue > value) {
    minValue = value;
  }
});
console.log(maxValue);
console.log(minValue);
*/

function sorting(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j + 1] < array[j]) {
        array[j] = array[j + 1];
        let num = array[j];
        array[j] = array[j + 1];
        array[j + 1] = num;
      }
    }
  }
}

sorting(array);
console.log(array);
