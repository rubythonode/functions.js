/**
 * @function Segregate 0's and 1's in an array
 * @param {*} arr 
 */
const segregate = (arr) => {
    let left = 0, size = arr.length, right = size - 1;
    while (left < right) {
        while (arr[left] === 0 && left < right) left++;
        while (arr[right] === 1 && left < right) right--;
        if (left < right) {
            arr[left] = 0;
            arr[right] = 1;
            left++;
            right--;
        }
    }
    return arr;
}

module.exports = segregate