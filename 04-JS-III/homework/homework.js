// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return(array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length-1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i=0;i<array.length;i++){
    array[i]=array[i]+1;
  }
  return(array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let str='';
  for (let i=0;i<(palabras.length-1);i++){
    str=str+palabras[i]+' ';
  }
  str=str+palabras[palabras.length-1];
  return(str);
}

//Tambien se podria haber usado un if
//let str='';
//for (let i=0;i<palabras.length;i++){
//  if (i===(palabras.length-1))
//    str=str+palabras[i];
//  else
//    str=str+palabras[i]+' ';
//}
//return(str);
//}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let i=array.length;
  let validacion=false;
  do{
    i--;
    if (array[i]==elemento)
      validacion=true;
  }
  while (i>0)
  return (validacion);
}

//HAY MUCHAS FORMAS DE RESOLVERLO, no se si es la mas optima pero es la primera q se me ocurrio :P


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma=0;
  for (let i=0;i<numeros.length;i++)
    suma=suma+numeros[i];
  return(suma);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma=agregarNumeros(resultadosTest);
  return(suma/resultadosTest.length);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let valorGrande=0;
  for (let i=0;i<numeros.length;i++){
    if (numeros[i]>valorGrande)
      valorGrande=numeros[i];
  }
  return(valorGrande);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if ((arguments.length)==0)
    return(0);
  else if ((arguments.length)==1)
    return(arguments[0]);
  else{
    let mult=1;
    for (let i=0;i<arguments.length;i++)
      mult=mult*arguments[i];
    return(mult);
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cant=0;
  for (let i=0;i<arreglo.length;i++){
    if (arreglo[i]>18)
      cant++;
  }
  return(cant);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  if ((numeroDeDia==1)||(numeroDeDia==7))
    return ('Es fin de semana');
  else
    return('Es dia Laboral');  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n===9)
    return(true);
  else{
    let result=false;
    let i=1;
    while ((!result)&&(i<n)){
      if (((90*i)<=n)||(n>=(99*i)))
        result=true;
      i=i*10
    }
    return(result);
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let result=true;
  i=0;
  while((result)&&(i<arreglo.length)){
    if ((arreglo[0])!=(arreglo[i]))
      result=false;
    i++;
  }
  return(result);
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let out=[];
  let j=0;
  for (let i=0;i<array.length;i++){
    if ((array[i]==='Enero')||(array[i]==='Marzo')||(array[i]==='Noviembre')){
      out[j]=array[i];
      j++;
    }
  }
  if (out.length===3)
    return(out);
  else
    return('No se encontraron los meses pedidos');
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let out=[];
  let j=0;
  for (let i=0;i<array.length;i++){
    if (array[i]>100){
      out[j]=array[i];
      j++;
    }
  }
  return(out);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let i=0;
  let out=[];
  do{
    out[i]=numero+(2*(i+1));
    if(i===(Math.abs(numero+(2*(i+1))))){
      return('Se interrumpió la ejecución');
      break;}
    i++;
  }while(i<10)
  return(out);
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let i=0;
  let j=0;
  let out=[];
  do{
    if(i===5){
      i++;
      continue;}
    else{
      out[j]=numero+(2*(j+1));
      j++;
      i++;
    }
  }while(i<10)
  return(out);
}
  
  //ESTA FUE MI INTERPRETACION DE LA CONSIGNA... CUNADO i===5 ahi no suma en el vector y saltea el valor en el vector
  //pero revisando JSIII.test.js los vectores que envia de prueva y los que tienen q devolver no seria asi
  // Tu código:
  //let i=0;
  //let j=0;
  //let out=[];
  //do{
  //  if(i!==5){
  //    out[j]=numero+(2*(i+1));
  //    i++;
  //    j++;}
  //  else{
  //    i++;
  //    continue;}
  //}while(i<10)
  //return(out);
//}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
