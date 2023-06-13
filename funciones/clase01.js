// funcion declarativa
function miFuncion(a,b) {
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