// Preguntar si es un tipo array 
const autos = ["BMW","Mercedes Benz","Volvo","Toyoya"];
console.log(typeof autos);

//ES5
console.log(Array.isArray(autos))
//ES6
console.log(autos instanceof Array);