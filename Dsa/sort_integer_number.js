function sortByBits(arr) {
    return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};
const bitCount = num => {
let sum = 0;
while (num) {
  sum += num & 1;
  num = num >> 1;
}
return sum;
};

console.log(sortByBits([0,1,2,3,4,5,6,7,8]));