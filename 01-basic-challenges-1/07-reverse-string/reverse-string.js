// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// 以下為簡潔寫法
// const reverseString = (str) => str.split('').reverse().join('');

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

module.exports = reverseString;
