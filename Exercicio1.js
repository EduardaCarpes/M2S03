
let salario = Number(prompt("Salário do colaborador:"))
let percentualAumento;

switch (true)
{
  case (salario <= 280): percentualAumento = 20; break;
  case (salario <= 700):percentualAumento = 15; break;
  case (salario <= 1500): percentualAumento = 10; break;
  default: percentualAumento = 5; break;
}

valorAumento = salario * (percentualAumento / 100);
novoSalario = salario +  valorAumento;

console.log("Salário antes do reajuste: R$ " + salario);
console.log("Percentual de aumento aplicado:  " + percentualAumento);
console.log("Valor do aumento: R$ " + valorAumento);
console.log("Novo salário, após o aumento: R$ " + novoSalario);
