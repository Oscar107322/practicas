/* 
tipo de datos de jarascriot
*/
//tipo de dato string
let nombre = "arturo"
console.log(nombre);
//tipo de dato numerico
let ni= 1000;
console.log(ni); 
//tipo objeto
var objeto = {
    nombre:"carlos",
    edad:25,
    localidad:"nl"

} 
console.log(objeto)
//para saber que tipo de variable es usar el typeof
console.log(typeof nombre)
//tipo de dato booleano(true,false)
var bandera = false;
var banderaverdader = true;
console.log(typeof bandera)

//tipo dato fucion
function mifuncion(){}
console.log(typeof mifuncion)

//variable constante
const fecha = 28
console.log(typeof fecha)

//tipo de variable de dato:symbd
//se usa para crear un valor unico de una variable
var simbolo = Symbol ("misimblo");
console.log (simbolo);
//tipo clase es un funcion 
class persona{
    constructor (nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(persona)
console.log(typeof persona)
//this es para hacer referencia de atributos de nuestra clase

//tipo de dato un defined
//sele puede asignar ondefine pero tambien es tipo de dato
var x;
console.log(x)
x = undefined
console.log (x)
//tipo de dato null/ null=arsencion de valor
var y =null
console.log(typeof y)
//tipo de dato (arreglo)
let auto =['bmn','volvo','vento'];
console.log(typeof y)
//asignar cadenas vacias a variables
let z ='';
console.log(z)
console.log(typeof z)
let a, b;
a=10, b=15;
let c = a+b;
console.log( c )
let nombreCompleto = "juan perez" 
let nombrecompleto = "carlos perez"
console.log ( nombreCompleto )
console.log ( nombrecompleto )
let break1 = 10