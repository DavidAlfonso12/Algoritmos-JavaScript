// function saludo(){
//     alert("Bienvenido Usuairo Mamahuevo");
// }

function suma() {
    // declaramos las variables necesarias
    let a = 0;
    let b = 0;
    let suma = 0;

    // solicitar los valores
    alert("Este algoritmo va a realizar la suma de dos valores que usted desea");

    a = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    b = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
    
    // Realizamos las operaciones
    suma = a + b;

    // Mostramos resultados
    alert("El resultado de la suma de sus dos valores es: " + suma);
}


function operacionesBasicas(){
    // declaracion de variables
    let a = 0;
    let b = 0;

    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let divicion = 0;

    // Se solicitan los valores al usuario
    alert("Este evento te va a hacer las operaciones basicas con los valores ingresados")
    a = parseInt(prompt("Ingrese el primer valor"));
    b = parseInt(prompt("Ingrese el segundo valor"));

    // Se realizan las operaciones
    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    divicion = a / b;

    // Se muestran las operaciones al usurio

    alert("La suma es: " + suma + "\nLa resta es: " + resta + "\nLa multiplicacion es: " + multiplicacion + "\nLa divicion es: " + divicion);
}

function cuadradoNumero(){
    // Declaracion de variables
    let numero = 0;
    let cuadrado = 0;

    // Se solicita el valor al usuario
    alert("Este evento te calculara el numero ingresado al cuadrado");
    numero = parseInt(prompt("Ingrese el numero que desea elevar a la 2"));

    // Se realiza la operacion
    cuadrado = numero **2;

    // Se muestra el resultado al usuario
    alert(numero + " Al cuadrado es: " + cuadrado);
}

function areaTriangulo(){
    // Declaracion de variables
    let altura = 0;
    let base = 0;
    let area = 0;

    alert("Este evento te calcura el area de un triangulo con las medidas que prefieras");

    // Se solicitan los valores al usuario
    altura = parseInt(prompt("Ingrese la altura que tiene tu triangulo"));
    base = parseInt(prompt("Ingrese la base que tiene tu triangulo"));

    area = (base * altura) / 2;
    
    // Mostramos el resultado al usuario
    alert("El area de el triangulo es: " + area);
}

function numeroMayorDos(){
    // Declaracion de variables
    let a,b = 0;

    alert("En este evento calcularemos cual es el mayor entre dos numero");

    // Se solicitan datos al usuario
    a = parseInt(prompt("Ingrese el primer valor"));
    b= parseInt(prompt("Ingrese el segundo valor"));

    // Se realiza la operacion
    if(a == b){
        alert("Los valores ingresados son iguales")
    }else if(a > b){
        alert(a + " Es mayor a " + b)
    }else{
        alert(b + " Es mayor a " + a)
    }
}

function convertirMedidas(){
    // Declaracion de variables
    let metros = 0;
    let pulgadas = 0;
    let pies = 0;
    let kilometros = 0;

    // Se solicitan los datos
    alert("Este evento te ayudara a convertir una medida en metros a pulgadas, pies y kilometros");
    metros = parseInt(prompt("Ingrese la medida en metros que le gustaria convertir"));
    
    // Se realizan las operaciones
    pulgadas = metros * 39.37;
    pulgadas = pulgadas.toFixed(2);
    pies = metros * 3.28084;
    pies = pies.toFixed(2);
    kilometros = metros / 1000;

    alert("Tus " + metros + " metros son: " + pulgadas + " pulgadas" + "\nTus " + metros + " metros son: " + pies + " pies" + "\nTus " + metros + " metros son: " + kilometros + " kilometros");
}

function convertirTemperatura(){
    // Declaracion de variables
    let celcios = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    // Se solicitan los datos al usuario
    alert("Este evento te ayudara a convertir una temperatura de celcios a Fahrenheit y a Kelvin");
    celcios = parseInt(prompt("Ingrese la temperatura que desea convertir en celcios"));

    fahrenheit = ((celcios * 9) / 5) + 32;

    kelvin = celcios + 273.15;

    // Se muestra los resultados al usuario
    alert(celcios + " Celcios son: " + fahrenheit + " Fahrenheit" + "\n" + celcios + " Celcios son: " + kelvin + " Kelvin");
}

function promedioEstudiantes(){
    // Declaracion de variables
    let nombre = "";
    let materia = "";
    let nota = 0;
    let sumaNotas = 0;
    let promedio = 0;

    alert("Este evente te ayudara a calcular el promedio de tus notas")
    // Solicitamos los datos al usuario
    nombre = prompt("Hola ingresa tu nombre por favor");
    materia = prompt("Cual materia quieres calcular?");

    // For que me permite leer 10 notas y guardar la suma de estas en la variable sumaNotas
    for(i = 1; i < 10; i++){
        nota = parseInt(prompt("Ingresa la nota numero " + i));
        sumaNotas = sumaNotas + nota;
    }
    promedio = sumaNotas * 0.10;
    promedio = promedio.toFixed(2);

    // Mostramos resultado al usuario
    if(promedio >= 6){
        alert("Hola " + nombre + " Tu promedio de la materia " + materia + " es: " + promedio + "\nPor lo tanto APROBASTE " + materia)
    }else{
        alert("Hola " + nombre + " Tu promedio de la materia " + materia + " es: " + promedio + "\nPor lo tanto REPROBASTE " + materia)
    }

    
}

function descuentoCompra(){
    // Declaracion de variables
    let kilos = 0;
    let descuento = 0;
    let total =0;

    // Solicitud de datos al usuario
    alert("Este evento te ayudara a calcular el descuento que te corresponde en tu compra");
    kilos = parseInt(prompt("Ingrese la cuantos kilos que desea comprar"));

    // Se hace la validacion y el descuento correspondiente
    if(kilos <0){
        alert("Por favor ingrese una cantidad adecuada");
    }else if((kilos >= 0) && (kilos <= 2)){
        total = kilos * 4500;
        alert("Su total a pagar es de " + total + ", No aplica descuento");
    }else if ((kilos >= 3) && (kilos <= 5)){
        total = kilos * 4500;
        descuento = total * 0.10;
        alert("Su total a pagar es de " + descuento + ", Cuenta con un descuento del 10%");
    }else if((kilos >= 6) && (kilos <= 9)){
        total = kilos * 4500;
        descuento = total * 0.15;
        alert("Su total a pagar es de " + descuento + ", Cuenta con un descuento del 15%");
    }else{
        total = kilos * 4500;
        descuento = total * 0.20;
        alert("Su total a pagar es de " + descuento + ", Cuenta con un descuento del 20%");
    }

}

function parOImpar(){
    // Declaracion de variables
    let a = 0;

    // Se solicitan datos al usuario
    alert("Este evento te dira si el numero que ingresas es par o impar");
    a = parseInt(prompt("Ingrese un numero"));

    // Se hace el calculo
    if(a % 2 == 0){
        alert("El numero es PAR");
    }else{
        alert("El numero es IMPAR")
    }
}

function calcularSalario(){
    // Declaracion de variables
    let horasTrabajadas = 0;
    let horasExtras = 0;
    let sueldoExtras = 0;
    let sueldo = 0;

    // Se solicitan las horas trabajadas al usuario
    alert("Este evento te ayudara a calcular el salario semanal");
    horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas que trabajo en la semana"));

    // Se hace el calculo de todas las horas
    if(horasTrabajadas <= 40){
        sueldo = horasTrabajadas * 10000;
        alert("Usted trabajó " + horasTrabajadas + " horas por lo tanto su salario semanal es: " + sueldo); 
    }else{
        horasExtras = horasTrabajadas - 40;
        horasTrabajadas = horasTrabajadas - horasExtras;
        sueldoExtras = horasExtras * 20000;
        sueldo = ((horasTrabajadas * 10000) + sueldoExtras);
        alert("Usted trabajo " + horasExtras + " horas extras" +"\nUsted recibe " + sueldoExtras + " Por sus horas extras " + "\nPor lo tanto su salario total es: " + sueldo);
    }
}

function numeroMenor(){
    // Declaracion de variables
    let a = 0;
    let b = 0;
    let c = 0;

    // Se solicitan los datos al usuario
    alert("Este evento te mostra cual es el menor de tres numeros");

    a = parseInt(prompt("Ingresa el primer numero"));
    b = parseInt(prompt("Ingresa el segundo numero"));
    c = parseInt(prompt("Ingrese el tercer numero"));

    // Se realiza el calculo

    if((a == b) && (b == c)){
        alert("Los numero son iguales");
    }else if((a < b) && (a < c)){
        alert("El numero " + a + " Es el menor de los tres");
    }else if((b < a) && (b < c)){
        alert("El numero " + b + " Es el menor de los tres");
    }else{
        alert("El numero " + c + " Es el menor de los tres");
    }

}



// Algorimos recuperacion

function yearBirth(){
    let yearCurrent = 0;
    let edad = 0;
    let yearBirth = 0;

    alert("Este algoritmo calculara tu año de nacimiento segun tu edad");

    yearCurrent = parseInt(prompt("Porfavor dime en que año estas"));
    edad = parseInt(prompt("Porfavor dime que edad tienes"));
    yearBirth = yearCurrent - edad;

    alert("Tu naciste el año: " + yearBirth);
}

function inversion(){
    let years = 0;
    let cantidad = 0;
    let ganancias = 0;
    let total = 0;

    alert("Este algoritmo calculara tu ganancia de la inversion en el Banco");

    years = parseInt(prompt("Porfavor dime cuantos años deseas hacer la inversión"));
    cantidad = parseInt(prompt("Porfavor dime cuanto deseas invertir"));

    ganancias = ((cantidad * 0.002)*12)*years;
    total = cantidad + ganancias;

    alert("Por tu inversion de " + years + " año(s) \nRecibiras un total de: $ " + total + "\nPor lo tanto tu ganancia es de: $ " + ganancias);
}

function colegio() {
    nota = 0;
    notas = 0;
    promedio = 0;

    alert("Este algoritmo permitira calcular el promedio de un alumno");

    for (i=1; i < 6; i++){
        nota = parseInt(prompt("Porfavor ingrese la nota "+i));
        notas = notas + nota;
    }
    promedio = notas / 5;

    if(promedio < 3){
        alert("El alumno reprobo y su nota es: " + promedio);
    }else{
        alert("El alumno aprobo y su nota es: " + promedio);
    }
}

function fruteria(){
    let kilos = 0;
    let precio = 0;
    let total = 0;
    let descuento = 0;

    alert("Este algoritmo calcula el precio total de una compra de manzanas");

    kilos = parseInt(prompt("Porfavor digame cuantos kilos desea comprar"));
    precio = kilos * 4500;
    if(kilos < 0){
        alert("Porfavor ingrese una cantidad valida");
    }else if(kilos <= 2){
        total = kilos * 4500;
        alert("El cliente debe pagar un total de: " + total + "\nNo aplica descuento");
    }else if(kilos <= 5){
        descuento = precio*0.10;
        total = precio - descuento;
        alert("El cliente debe pagar un total de: " + total + "\nCuenta con descuento del 10%");
    }else if(kilos < 10){
        descuento = precio*0.15;
        total = precio - descuento;
        alert("El cliente debe pagar un total de: " + total + "\nCuenta con descuento del 15%");    
    }else{
        descuento = precio * 0.20;
        total = precio - descuento;
        alert("El cliente debe pagar un total de: " + total + "\nCuenta con descuento del 20%");
    }
}

function cantidadDeseada(){
    let cant_valores =0;
    let suma =0;

    alert("Este algoritmo te permitira ingresar tantos valores como desees y los sumara");
    cant_valores = parseInt(prompt("Porfavor dime cuantos valores deseas ingresar"));
    
    for (let i = 1; i <= cant_valores; i++) {
        var valor = parseInt(prompt("Porfavor ingresa el "+i+" valor"));
        suma = suma + valor;
    }

    alert("Señor usuario la suma total de los valores que ingreso es: " + suma);
}

function valorMatricula() {
    let promedio = 0;
    let materias = 0;
    let valorMateria = 0;
    let iva = 0;
    let valorMatricula = 0;

    alert("Este algoritmo calculara el valor de tu matricula");

    materias = parseInt(prompt("Porfavor dime cuantas materias vas a cursar"));
    valorMateria = parseInt(prompt("Porfavor dime cual es el precio de cada materia"));
    promedio = parseFloat(prompt("Porfavor dime cual fue tu promedio el periodo pasado"));
    valorMateria = materias * valorMateria;

    if(promedio < 0){
        alert("Porfavor ingresa un promedio valido");
    }else if(promedio >= 4.5){  
        valorMatricula = valorMateria - (valorMateria * 0.3);
        alert("Tienes 30% de descuento y no pagas IVA el valor de tu matricula es: " + valorMatricula);
    }else{
        iva = valorMateria * 0.1;
        valorMatricula = valorMateria + iva;
        alert("No tienes descuento y pagas 10% de IVA el valor de tu matricula es: " + valorMatricula);
    }
}

function salarioSemanal(){
    let horas = 0;
    let horasExtras = 0;
    let salario = 0;
    
    alert("Este algoritmo calculara el salario semanal de una persona segun sus horas de trabajo");

    horas = parseInt(prompt("Porfavor dime cuantas horas trabajaste en la semana"));

    if(horas < 0 ){
        alert("Porfavor ingresa un valor valido");
    }else if(horas <= 40){
        salario = horas * 10000;
        alert("Tu sueldo por " + horas + " horas trabajadas es: " + salario);
    }else{
        var valorHorasExtras = 0;
        horasExtras = horas - 40;
        valorHorasExtras = horasExtras * 20000;
        salario = (40 * 10000) + valorHorasExtras;

        alert("Tu sueldo por "+horas+" horas trabajadas es: " +salario);
    }
}


function primos(){
    let num1 = 0;
    let num2 = 0;
    let esPrimo = true;
    let primos = [];

    //alert("Este algoritmo buscara los numeros primos que existan entre un rango que determines");
    num1 = parseInt(prompt("Porfavor dime desde que numero empieza el rango"));
    num2 = parseInt(prompt("Porfavor dime hasta que numero va rango"));
    for(let i = num1; i <= num2; i++){
        esPrimo = true;
        for(let y = 2; y < i; y++){
            if(i % y === 0){
                esPrimo = false;
                break ;
            }  
        }
        if(esPrimo === true && i > 1){
            primos.push(i);
        }          
    }

    alert("Los numeros primos entre "+num1+" y "+num2+" son: "+ primos);
}


function nomina(){
    let empleados =0;
    const minimo = 1160000;
    let salud = 0;
    let pension = 0;
    let seguridadSocial = 0;
    let devengadoTotal = 0;

    alert("Este algoritmo te permite calcular la nomina para los empleados que necesites");
    empleados = parseInt(prompt("Cuantos empleados deseas ingresar"));
    for(let i = 1; i <= empleados; i++){
        let nombre = prompt("Dime cual el nombre del empleado "+ i);
        let valorDevengado = parseInt(prompt("Porfavor dime el valor devengado del empleado "+nombre));

        if(valorDevengado <= (minimo * 3)){
            salud = valorDevengado * 0.05;
            pension = valorDevengado *0.118;
            seguridadSocial = valorDevengado * 0.03;
            devengadoTotal = valorDevengado - salud - pension - seguridadSocial;

            alert("Nombre empleado: "+ nombre + "\nValor devengado base = "+valorDevengado+"\nSalud 5% = "+salud+"\nPension 11.8% = "+pension+"\nSeguridad social 3% = "+seguridadSocial+"\nValor devengado total = "+devengadoTotal);
        }else if(valorDevengado > (minimo * 4) && valorDevengado < (minimo * 8)){
            salud = valorDevengado * 0.1;
            pension = valorDevengado *0.15;
            seguridadSocial = valorDevengado * 0.05;
            devengadoTotal = valorDevengado - salud - pension - seguridadSocial;

            alert("Nombre empleado: "+ nombre + "\nValor devengado base = "+valorDevengado+"\nSalud 10% = "+salud+"\nPension 15% = "+pension+"\nSeguridad social 5% = "+seguridadSocial+"\nValor devengado total = "+devengadoTotal);
        }else if(valorDevengado > (minimo * 8) && valorDevengado <= (minimo * 20)){
            let guerra = 0;
            salud = valorDevengado * 0.2;
            pension = valorDevengado *0.13;
            seguridadSocial = valorDevengado * 0.1;
            guerra = valorDevengado * 0.05;
            devengadoTotal = valorDevengado - salud - pension - seguridadSocial - guerra;

            alert("Nombre empleado: "+ nombre + "\nValor devengado base = "+valorDevengado+"\nSalud  20% = "+salud+"\nPension  13% = "+pension+"\nSeguridad social  10% = "+seguridadSocial+"\nImpuesto de guerra  5% = "+guerra +"\nValor devengado total = "+devengadoTotal);
        }
    }   
}