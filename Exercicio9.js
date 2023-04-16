
function somar(...valores) {
    let soma = 0;
    valores.forEach(valor => {
        soma += valor;
       });
       return soma;
      }
      
      console.log(somar(1, 2, 3)); 
  

  function multiplicar(a, b, c) {
    return a * b * c;
  }
  
  const numeros = [2, 2, 3];
  
  console.log(multiplicar(...numeros));