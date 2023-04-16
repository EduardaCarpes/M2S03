function multiplicarArray(multiplicador) {
    const numeros = Array.from({length: 10}, (_, i) => i + 1);
  
    const resultado = numeros.map(numero => numero * multiplicador);
  
    return resultado;
  }
  
  const resultado = multiplicarArray(5);
  
  console.log(resultado); 