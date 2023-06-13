// funcion declarativa
function miFuncion(a,b) {
    console.log(arguments.length) // 2 las propiedades de un objeto es admitido en funciones
    return a+b;
}

//llamar a la función
let resultado = miFuncion(4,8);
console.log(resultado);


// Funcion Expresion
let x = function(a,b){return a+b};
let resultado1 = x(1,2);
console.log(resultado1);

// Funcion self invoking (autollama) no se puede reutilizar
(function (){
    console.log("Ejecutando la función");
})()

(function (a,b){
    console.log("Ejecutando la función " + (a+b));
})(3,4)

// funciones como objetos
function funcionObjeto(a,b) {
    return a+b;
}
let miFuncionTexto= funcionObjeto.toString(); // funcion que se comporta como los métodos de un objeto
console.log(miFuncionTexto);