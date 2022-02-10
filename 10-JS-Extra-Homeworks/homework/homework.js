// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArray = [];
  for(var clave in objeto){
    nuevoArray.push([clave, objeto[clave]]) 
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:
  var objeto = {};
  for(var i = 0 ; i< string.length;i++){
    if( objeto.hasOwnProperty(string[i]) ){
      objeto[string[i]] = objeto[string[i]] +1
    }else{
      objeto[string[i]]= 1 ;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
  var mayuscula = '';
  var minuscula = '';
  for(var i = 0 ; i < s.length ;  i++){
    if(s[i] === s[i].toLowerCase()){
      minuscula = minuscula + s[i];
    }else{
      mayuscula = mayuscula + s[i];
    }
  }
  return mayuscula + minuscula;
}


function asAmirror(str) {/////// REVISAAAAAAAAAAAAAAAAAAAAAARR RE HACER QUE NO LO ENTENDI BIEEEEEEENNNNNNN
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  //crea var ,otorga el str dividido en arrays gracias a .split(' '), y ademas le deja espacio ['The ', 'Henry ']
  // ahi entra map y agarra cada elemento del array pasado nuevito y lo expone alresto del codigo elemento por elemento.
  var invertida =  str.split(' ').map(function (elemento){
    //'The' nos queda [T,h,e] y aplicando reverse
    return elemento.split('').reverse().join('')
  })
  return invertida.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
var numString = numero.toString();
var resultado = numString.split('').reverse().join('');
if(numString === resultado){
  return "Es capicua";
}else{
  return "No es capicua";
}
}


function deleteAbc(cadena){ /// REHACER DE MANIJA QUE SOY y con otra forma ;) 
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var difAbc = '';
  for (var i = 0 ; i < cadena.length ; i ++){
    if(cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c' ){
      continue;
    }else{
      difAbc += cadena[i];
    }
  }
  return difAbc;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:
  var cambio = true;
  while(cambio){
    cambio = false;  // si esto mas adelante no cambia no entra devuelta en el while prque "cambio" esta false
    for(i = 0; i < arr.length-1 ; i ++){//    recorremos la longitud de elementos de arr
      if (arr[i].length > arr[i+1].length){// si la longitud del elemento de arr es mayor al de la siguiente posicion ,...
        var aux = arr [i]; /// guarda el valor 
        arr[i] = arr[i+1];// hace un swicheado de uno por otro
        arr[i+1] = aux;  // hace el swicheado de otro por uno jejeje
        cambio = true; // habilita seguir entrando al bucle while
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var coincidencias = [];
  for(var i = 0 ; i < arreglo1.length ; i++){
    for(var j = 0; j < arreglo2.length ; j++){
      if(arreglo1[i]=== arreglo2[j]){
        coincidencias.push(arreglo1[i])
      }
    }
  }
  return coincidencias;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

