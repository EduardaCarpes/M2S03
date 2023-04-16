const multiplicarArray3 = (multiplicador) => {
    const numeros = Array.from({length: 10}, (_, i) => i + 1);
  
    const resultado3 = numeros.map((numero) => numero * multiplicador);
  
    return resultado3;
  };
  
  const resultado3 = multiplicarArray3(5);
  
  console.log(resultado3); 
  