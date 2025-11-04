export function add(numbers) {
  let total = 0;
   for (let i = 0; i< numbers.length ; i++ ){
    total+= numbers[i];
   }
  return total;
}

export function subtract(numbers) {
  let total = numbers[0];
   for (let i = 1; i< numbers.length ; i++ ){
    total-= numbers[i];
   }
  return total;
}

export function multiply(numbers) {
  let total = 1;
   for (let i = 0; i< numbers.length ; i++ ){
    total*= numbers[i];
   }
  return total;
}

export function divide(numbers) {
let total = numbers[0];
   for (let i = 1; i < numbers.length ; i++ ){
    console.log(numbers[i]);
    if (numbers[i] == 0){
      console.log("NaN, Division by 0");
      return NaN;
    }else{
    total /= numbers[i];
   }
  }
  return total;
}

