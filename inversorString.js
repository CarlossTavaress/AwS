function inverterString(str) {
  return str.split('').reverse().join('');
}
function inverterString(str) {
  let novaString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    novaString += str[i];
  }
  return novaString;
}
function inverterString(str) {
  return str.split('').reduce((acc, char) => char + acc, '');
}
const minhaString = 'Exemplo de string para inverter';
const minhaStringInvertida = inverterString(minhaString);
console.log(minhaStringInvertida); 

//este código inverte os caracteres de quaqluer string 
