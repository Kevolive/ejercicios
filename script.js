//Usamos el condicional switch para la ejecución de los ejercicios.

switch (prompt("Ingrese el número del ejercicio (1-10): ")) {
    case '1':
        console.log("1.Cálculo de Área de un Círculo")
// Dado el radio de un círculo, calcular el área usando la fórmula Área = π * radio².

let radio=Number(prompt("Ingrese el radio de un círculo"));
let area=3.1416*Math.pow(radio,2);
console.log("El área del círculo es: " + area);
        break;
    case '2':
        console.log("2.Conversión de Grados Celsius a Fahrenheit")
        // 
// Dada una temperatura en grados Celsius, convertirla a Fahrenheit usando la fórmula F = (C * 9/5) + 32
let celsius= Number(prompt("Ingrese la temperatura en grados Celsius:"))
let fahrenheit=(celsius*9/5)+32
console.log("La temperatura de celsius a fahrenheit es: " + fahrenheit + " grados fahrenheit")
        break;
    case '3':
        console.log("3.Cálculo de Interés Simple")
        // 
// Dado un capital, una tasa de interés y un tiempo, calcular el interés simple usando la fórmula Interés = (Capital * Tasa * Tiempo) / 100.
let capital =Number(prompt("Ingrese el capital:"))
let tasa=   Number(prompt("La tasa de interés (%)"))
 let tiempo= Number(prompt("El tiempo (años)"))
 let interes=(capital*tasa*tiempo)/100
 console.log("El interés simple es: " + interes)  
        break;
    case '4':
        console.log(" 4.Cálculo de la Hipotenusa de un Triángulo Rectángulo")
        // 
//  Dados los dos catetos de un triángulo rectángulo, calcular la hipotenusa usando el teorema de Pitágoras: Hipotenusa = √(Cateto1² + Cateto2²).
let cateto1= Number(prompt("Ingresa el primer Cateto "))
let cateto2= Number(prompt("Ingresa el segundo Cateto "))
let hipotenusa= Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));
console.log("La hipotenusa del triángulo es " + hipotenusa)
        break;
    case '5':
        console.log("5. Conversión de Horas a Segundos")
        // 
// Dado un número de horas, convertirlo a segundos usando la fórmula Segundos = Horas * 3600
let horas =Number(prompt("Horas:"));
let segundos =horas*3600
 console.log("El valor dado en horas equivale a " + segundos + " segundos")
        break;
    case '6':
        console.log("6. Suma de Dos Números y Multiplicación del Resultado por un Tercero")
        //  
//  Dados tres números, sumar los dos primeros y multiplicar el resultado por el tercero.
let numero1 =Number(prompt("Ingresa el primer número: "))
let numero2 =Number(prompt("Ingresa el segundo numero: "))
let numero3 =Number(prompt("Ingresa el tercero: "))

let suma = numero1 + numero2
let multiplicar = suma * numero3
console.log("EL resultado de la operacipon es " + multiplicar)
        break;
    case '7':
        console.log("7.Cálculo del Volumen de un Cilindro")
        // 
// Dados el radio de la base y la altura de un cilindro, calcular el volumen usando la fórmula Volumen = π * radio² * altura.

let radioCilindro= Number(prompt("Ingrese el radio de la base del cilindro"));
let altura= Number(prompt("Ingrese la altura"));
let volumen= Math.PI * Math.pow(radioCilindro,2)*altura
console.log("El volumen del cilindro es " + volumen);
        break;
    case '8':
        console.log("8.Promedio de Tres Números")
// Dados tres números, calcular su promedio usando la fórmula Promedio = (N1 + N2 + N3) / 3.

let numeroUno =Number(prompt("Ingresa el primer número: "))
let numeroDos =Number(prompt("Ingresa el segundo número: "))
let numeroTres =Number(prompt("Ingresa el tercero: "))

let promedio = (numeroUno + numeroDos + numeroTres) / 3
console.log("El promedio de los 3 números es " + promedio)
        break;
    case '9':
        console.log("9.Cálculo de la Energía Cinética")
        // 
// Dada la masa y la velocidad de un objeto, calcular la energía cinética usando la fórmula Energía = (1/2) * masa * velocidad²
let masa =Number(prompt("Ingrese el valor de la masa..."))
let velocidad = Number(prompt("Ingresa la velocidad..."))
let energía = (1/2)*masa*Math.pow(velocidad, 2)
console.log("El valor de la energía es " + energía)

        break;
    case '10':
        console.log("10.Conversión de Minutos a Horas y Minutos")
        // 

// Dado un número de minutos, convertirlo a horas y minutos. (Sin usar condicionales, podrías mostrar el cálculo separado de horas enteras y minutos restantes usando solo divisiones y multiplicaciones).

let minutos =Number(prompt("Ingresa el número de minutos..."))
let horasDada = Math.floor(minutos / 60)
let minutosRestantes = minutos % 60
console.log("El resultado es "+ horasDada + " horas y " + minutosRestantes + " minutos")
        break;
    default:
        console.log("Ejercicio no encontrado.");
}





 
 



  








