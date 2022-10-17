string = 'aaBQAaBCQQQQQBbb';
frequency = {};

for (char of string) {
  if(char in frequency) {
    frequency[char] += 1
  }
  else{
    frequency[char] = 1
  }
}
let frequencyArray = Object.keys(frequency).map(function(key) {
  return [key, frequency[key]];
});

frequencyArray.sort(function(first, second) {
  return second[1] - first[1];
});

let str = '';
for (item of frequencyArray) {
  str += item[0].repeat(item[1]);
}

console.log(str)