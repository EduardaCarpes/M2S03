function multiplicarArray(multiplicador) {
    const numeros = Array.from({length: 10}, (_, i) => i + 1);
  
    const resultado2 = [];
  
    for (const numero of numeros) {
      resultado2.push(numero * multiplicador);
    }
  
    return resultado2;
  }
  
  const resultado2 = multiplicarArray(5);
  
  console.log(resultado2);