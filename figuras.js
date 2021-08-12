//Codigo del cuadrado

//const ladoCuadrado = 2;
let area;
let perimetro;

const perimetroCuadrado = (lado) => {
    return lado * 4;
}

perimetro = perimetroCuadrado(3);

const areaCuadrado = (lado) => {
    return lado * lado;
}


area = areaCuadrado(3);

//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

console.log(`El perimetro del cuadrado es: ${perimetro} cm`);

console.log(`El area del cuadrado es: ${area} cm^2`);