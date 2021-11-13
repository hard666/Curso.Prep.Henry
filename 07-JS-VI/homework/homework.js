// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
//  let array = nombre.split('');
//  array[0]=array[0].toUpperCase();
//  return(array.join(''));
//}

//Otra forma string ale
//Usar charAt(0) para seleccionar el primer caracter del string ---> A
//Ahora podemos usar slice() con el indice que nos devuelve el restante string desde el indice seleccionado
//En este caso slice(1) ----> le
// Y retornamos el primer caracter en mayuscula + el resto
  return(nombre.charAt(0).toUpperCase() + nombre.slice(1));
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return(cb());
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return(cb(n1,n2));
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
//  let suma=0;
//  for(let i=0;i<numeros.length;i++){
//    suma=suma+numeros[i];
//  }
//  cb(suma);
//}

//Otra forma
let total=0;
numeros.forEach(function(elemento){
  total=total+elemento;
})
cb(total);
}

//otra forma
//0 es el valor de inicio del acumulador
//let resultado=numeros.reduce(function(acumulador,elemento){return (acumulador+elemento)},0);
//cb (resultado);
//}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //array.forEach(function(elemento){})
  //Tu código:
  array.forEach(function(elemento){
    cb(elemento);
  })
}
//tambien valido array.forEach(cb);

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // array.map(function (elemento){})
  //Tu código:
  let arrayReturn=array.map(cb);
  return(arrayReturn);
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let arrayReturn=[];
  array.forEach(function(elemento){
    if(elemento[0].toUpperCase()==='A')
      arrayReturn.push(elemento);
  })
  return(arrayReturn);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
