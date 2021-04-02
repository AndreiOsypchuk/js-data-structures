const strReverse = (str) => {
  if(str.length === 1) return str;
  return str[str.length-1] + strReverse(str.slice(0,str.length-1));
}
console.log(strReverse('hello'));
console.log(strReverse('this is a thing and a thing with this'));
