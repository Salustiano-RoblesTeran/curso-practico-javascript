

//Codigo del cuadrado

const perimetroCuadrado1 = (lado) => {
    return lado * 4;
}


const areaCuadrado2 = (lado) => {
    return lado * lado;
}

//Conecto javascript con html

function perimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado1(value);

    alert(perimetro);

}


 
function areaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado2(value);
    
    alert(area);
}