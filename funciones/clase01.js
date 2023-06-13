// Funcion Expresion
let sumar = function(a=4,b=5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a+b+arguments[2];
};
let resultado = sumar(3,6,7); // En js no es necesario que el número de argumentos sea igual que el de los parámetros
console.log(resultado);



