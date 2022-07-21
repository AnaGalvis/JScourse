let nombreIngresado = prompt("Ingresa tu nombre") 
let apellidoIngresado= prompt ("Ingresar Apellido")

let suma = 0 
let cont = 0

for (let i = 0; i < 7; i++){
    let numero =parseInt( prompt ("Ingrese un numero, Por favor"));
    suma= suma+ numero;
    cont++;

}
if (cont > 0 ){
    let promedio = suma / cont ;
    alert ("Su total es: "  +suma);
    alert (nombreIngresado + " su promedio es: " +promedio);
}else{
    alert ("No ingresaste un dato valido")
}
