function Multiplicar(n1) {
    return alert("Total: " + n1 * n1);
}

function Valores(a, b, c) {
    var res = a + b + c;
    return alert("Resultado: " + res);
}

function restar(num1, num2) {
    var res = num1 - num2;
    alert("La resta es: " + res);
}

function dividir(num1, num2) {
    var div = num1 / num2;
    alert("La division es: " + div);
}

function calculaPrecioTotal(precio) {
    var impuestos = 1.16;
    var gastosEnvio = 10;
    var precioTotal = (precio * impuestos) + gastosEnvio;

    return alert("Resultado: "+precioTotal);
}