let resultado = 0
let ticket = "Detalle de compra: \n"
let rta = ""
function iva(precio){
    return precio* 0.21
}
do{
    let producto = prompt ("ingrese el nombre del producto")
    let precio = parseFloat (prompt ("indique el precio"))
    resultado = resultado + precio + iva(precio)
    ticket = ticket + "\n" + producto + "\t$" + (precio + iva(precio))
    rta = prompt("¿Desea salir?(escriba'salir' para salir)")
} while (rta != "salir")
if (resultado>2000){
    resultadoConDescuento = resultado * 0.9
    alert( ticket + "\n toltal $:" + resultado + "\nTotal con descuento: $"+ resultadoConDescuento )
}else{
    alert( ticket + "\n toltal $:" + resultado)
}