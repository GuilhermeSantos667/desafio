const fibonacci = (num) => {
  if (num < 0) return false;
  
  let a = 0, b = 1, next = a + b;


  if (num === a || num === b) return true;

  while (next <= num) {
    if (next === num) return true;


    a = b;
    b = next;
    next = a + b;
  }

  return false;
}
const numero = 21; 
if (fibonacci(numero)) {
  console.log(`o numero ${numero} pertence a sequencia de fibonacci.`);
} else {
  console.log(`o numero ${numero} não pertence a sequencia de fibonacci.`);
}



const contemLetraA = (string) =>{

  let contador= 0
  
  for(let i of string){
    if(i === "a" || i === "A"){
      contador++
    }
  }

  if(contador < 1){
    return console.log(`a string nao tem letra "A"`); 
  }
  return console.log(`a string contem a letra "A" ${contador} vezes`);
  

}

contemLetraA("testa")



let soma = 0;
let k = 1;
const indice = 12;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);
