alert("¡Bienvenido a la Calculadora de Protogemas!");
inicio = prompt("¿Listo para calcular tus protos? si/no");

while(inicio != "si"){
    alert("Tómate tu tiempo.");
    inicio = prompt("¿Listo para calcular tus protos? si/no");
}

// Objetos
function mostrar2(mensaje4){
    console.log(mensaje4);
}

function Fuente(nombre, valor, frecuencia){
    this.nombre = nombre;
    this.valor = valor;
    this.frecuencia = frecuencia;
}

const fuente0 = new Fuente("Encargos", "60 protogemas", "diariamente, 4 encargos por día y una recompensa adicional por hacer todos.")
const fuente1 = new Fuente("Eventos pequeños", "420 protogemas", "generalmente de 3 a 5 eventos por actualización, cada 42 días.");
const fuente2 = new Fuente("Evento Grande", "1000 protogemas", "uno por actualización, cada 42 días.");
const fuente3 = new Fuente("Bendición Lunar", "90 protogemas", "diariamente, una vez al día.");
const fuente4 = new Fuente("Pase de Batalla", "4 deseos + 680 protogemas", "cada 10 niveles por 50 niveles, un pase cada 41 días.");
const fuente5 = new Fuente("Abismo", "50 protogemas por cada 3 estrellas de una sala", "cada 15 días.");
const fuente6 = new Fuente("Reset de Tienda", "5 deseos", "una vez al mes, el primero de cada mes.");
const fuente7 = new Fuente("Stream", "300 protogemas", "cada 30 dias aproximadamente, 2 semanas antes de una actualización.");
const fuente8 = new Fuente("Actualización", "600 protogemas", "cada 42 días, cuando se implementa una nueva actualización.");

//Encargos
let dias = parseInt(prompt("¿Por cuántos días quieres calcular tus protogemas?"));
let encargos = 60 * dias;
mostrar2(fuente0);

if(dias == ""){
    alert("El campo no debe estar vacío");
}
else{
    alert("encargos" + " = " + encargos + " protogemas");
}

//Funciones
function pregunta(mensaje){
    return respuesta = prompt(mensaje);
}



function si(respuesta_usuario, numero, variable, mensaje4){
    if(respuesta == respuesta_usuario){
        mostrar2(mensaje4);
        return result = numero * variable;
    }
    else{
        result = 0
    }
}



function preg_numero(mensaje2){
    return respuesta_num = parseInt(prompt(mensaje2));
}

function preg_numero2(mensaje3){
    return respuesta_num2 = parseInt(prompt(mensaje3));
}

function mostrar(msj1, msj2, msj3){
    alert (msj1 + msj2 + msj3);
}

function preg_dentro(respuesta_usuario, mensaje2){
    if(respuesta == respuesta_usuario){
        preg_numero(mensaje2);
        
    }
    else{
        respuesta_num = 0
    }
}

function doble_preg(respuesta_usuario){
    if(respuesta == respuesta_usuario){
        preg_numero("¿Cuántos Abismos jugarás?");
        preg_numero2("¿Cuántas estrellas sacas por abismo? Ingresa un número del 1 al 12");
        return result2 = respuesta_num * respuesta_num2;
    }
    else{
        result2 = 0
    }
}

function eventos(cant1, cant2, msj4, msj5, mensaje4){
    if(cant1 < cant2){
        alert(msj4);
        
    }
    else{
        alert(msj5);
        mostrar2(mensaje4);
    }
}



// Eventos
let eventos_pequeños = 420 * dias /7;
eventos(eventos_pequeños, 420, "Eventos pequeños" + " = " + "0" + " protogemas", "Eventos pequeños" + " = " + eventos_pequeños + " protogemas", fuente1 );
let resu1 = encargos + eventos_pequeños;

let evento_grande = 1000 * dias /42;
eventos(evento_grande, 1000, "Eventos Grandes" + " = " + "0" + " protogemas", "Eventos Grandes" + " = " + evento_grande + " protogemas", fuente2 );
let resu2 = resu1 + evento_grande;

// Bendicion Lunar
pregunta("¿Tienes bendición lunar?");
si("si", 90, dias, fuente3);
mostrar("Bendición Lunar: ", result, " protogemas");
let resu3 = resu2 + result;


// Pase de Batalla
pregunta("¿Tendrás Pase de Batalla?");
preg_dentro("si", "¿Cuántos Pases tendrás?")
si("si", 1320, respuesta_num, fuente4);
mostrar("Pase de Batalla: ", result, " protogemas");
let resu4 = resu3 + result;

// Abismo
pregunta("¿Jugarás Abismo?");
doble_preg("si");
si("si", 50, result2, fuente5);
mostrar("Abismo: ", result, " protogemas");
let resu5 = resu4 + result;

//Reset Tienda
pregunta("¿Habrá Reset de Tienda?");
preg_dentro("si", "¿Cuántos Resets habrán?");
si("si", 800, respuesta_num, fuente6);
mostrar("Tienda: ", result, " protogemas");
let resu6 = resu5 + result;

//Stream
pregunta("¿Verás Streams?");
preg_dentro("si", "¿Cuántos Streams verás?");
si("si", 300, respuesta_num, fuente7);
mostrar("Streams: ", result, " protogemas");
let resu7 = resu6 + result;

//Actus
pregunta("¿Habrán Actualizaciones?");
preg_dentro("si", "¿Cuántas Actualizaciones habrán?");
si("si", 600, respuesta_num, fuente8);
mostrar("Actualizaciones: ", result, " protogemas");
let total = resu7 + result;
alert("Tu total es de " + total + " protogemas")
