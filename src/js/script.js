let INDICE = 12;
let SOMA = 0;
let K = 1;

// Resposta 1)  77
while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
  console.log(`Resultado é :${SOMA}`);
}
console.log(`Resultado Final é :${SOMA}`);

// Pergunta 2)
// a) sequencia de numeros impares RESPOSTA 9
// b) o proximo numero é sempre o dobro do anterior RESPOSTA 128
// e) lógica da sequencia de fibonacci 8+5 RESPOSTA 13

// Resposta 3)

function diasValidos(vals) {
  return vals.filter((v) => v > 0);
}
function menorFaturamento(vals) {
  return Math.min(...diasValidos(vals));
}
function maiorFaturamento(vals) {
  return Math.max(...diasValidos(vals));
}
function media(vals) {
  const v = diasValidos(vals);
  return v.reduce((acc, val) => acc + val, 0) / v.length;
}
function mediaFaturamento(vals) {
  const v = diasValidos(vals);
  return v.reduce((acc, val) => acc + val, 0) / v.length;
}
function acimaMedia(vals) {
  const med = media(vals);
  return diasValidos(vals).filter((v) => v > med).length;
}
function resultados(vals) {
  console.log(`Menor: ${menorFaturamento(vals)}`);
  console.log(`Maior: ${maiorFaturamento(vals)}`);
  console.log(`Dias acima da média: ${acimaMedia(vals)}`);
}
const faturamentos = [117, 298, 0, 255, 346, 0, 0, 156, 213, 115, 318, 0];
resultados(faturamentos);

// Resposta 4)

// SELECT c.id, c.nome, t.numero
// FROM Clientes c
// JOIN Telefones t ON c.id = t.cliente_id
// JOIN Estados e ON c.estado_id = e.id
// WHERE e.uf = 'SP';

// Resposta 5)
// Após tentar calcular as variaveis me dei conta que no ponto de encontro ambos estarão no mesmo ponto da estrada então estarão na mesma distancia.
