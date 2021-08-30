// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
}


//console.log("El perímetro del cuadrado es: " + perimetroCuadrado+ "cm");

function areaCuadrado(lado){
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo

/*console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm, "
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");*/

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("el radio del círculo es: " + radioCirculo + "cm");

//Diámetro

function diametroCirculo(){
    return radio*2;
}

//const diametroCirculo = radioCirculo *2;
//console.log("el diámetro del círculo es: " + diametroCirculo + "cm");

//PI

const PI = Math.PI;

//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI; 
}

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Ärea

function areaCirculo (radio){
    return (radio*radio)*PI;
}

//const areaCirculo = (radioCirculo*radioCirculo)*PI;
//console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();


// Aquí interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}