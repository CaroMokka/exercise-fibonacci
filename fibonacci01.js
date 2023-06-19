//Programa - 01
//Mostrar en consola la secuencia de Fibonacci: 
//a.Entre los números 0 y 1000. 
//b.Números pares entre 0 y 1000. 
//c.Números impares entre 0 y 1000.
//Hint: Puedes usar recursividad o algún ciclo o método iterador visto en clase


//FIBONACCI
//a.Entre los números 0 y 1000.
const fibonacci = (num) => {
    const fib = [0, 1]
    for(let i = 2; i < num; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib
}
const fibSerie = fibonacci(100)
console.log('Secuencia Fibonacci 0 a 1000', fibSerie)

//------------------------------------------
//b.Números pares entre 0 y 1000.
const pares = (arr) => {
    const seriePares = arr.map( (n) => {if( n % 2 === 0)  return n }).filter((el)=> el !== undefined)
    return seriePares
}
//caso de uso
const fibSeriePares = pares(fibSerie)
console.log('fibonacci 0 a 1000 solo números pares', fibSeriePares)

//------------------------------------------
//c.Números impares entre 0 y 1000.
const impares = (arr) => {
    const serieImpares = arr.map( (n) => {if( n % 2 !== 0)  return n }).filter((el)=> el !== undefined)
    return serieImpares
}
//caso de uso
const fibSerieImpares = impares(fibSerie)
console.log('fibonacci 0 a 1000 solo números impares', fibSerieImpares)
















