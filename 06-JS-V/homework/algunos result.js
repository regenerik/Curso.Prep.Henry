1


function Usuario(opciones){
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }
  Usuario.prototype.saludar = function (){
    return 'hola, mi nombre es' +this.nombre;
  }
  return Usuario;

2

Constructor.prototype.saludar = function(){
    return "Hello World!"
  }

3
String.prototype.reverse = function () {
    var palabraInv = '';                  //crea contenedor  para guardar el string invertido
    for (var i =; this.length-1; i--){   /// i es igual a la cantidad de letras que tiene this - 1 y recorre restando de a uno hasta cero.
        palabraInv = palabraInv + this[i]    /// contenedor de string recibe de a una las letras de adelante pa atras.
    }
    return palabraInv;  // muestra las letras ordenadas al revez
}

4

