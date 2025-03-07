console.log("7DaysOfCode - Lógica JS 5/7: Arrays y colecciones");
console.log("-------------------------------------------------");
let eleccion_usuario

let array_frutas = [];
let array_lacteos = [];
let array_congelados = [];
let array_dulces = [];
let elejir_productos = true;

while (elejir_productos == true) {
    console.log("¿Deseas agragar un producto al carrito de compras?");
    console.log("1. Si");
    console.log("2. No");
    console.log("3. Eliminar algun producto")
    eleccion_usuario = prompt();

    if (eleccion_usuario == 1) {
        console.log("¿Que alimento deseas agragar?");
        let alimento_agregar = prompt();
        console.log("-----------------------------");
        console.log("¿En que categoria deberia de ir?");
        console.log("1. Frutas");
        console.log("2. Lacteos");
        console.log("3. Congelados");
        console.log("4. Dulces");
        let eleccion_usuario_categoria = prompt();
        
        if (eleccion_usuario_categoria == 1) {
            array_frutas.push(alimento_agregar);
            
        } else if (eleccion_usuario_categoria == 2) {
            array_lacteos.push(alimento_agregar);
            
        } else if (eleccion_usuario_categoria == 3) {
            array_congelados.push(alimento_agregar);
            
        } else if (eleccion_usuario_categoria == 4) {
            array_dulces.push(alimento_agregar);
            
        }
        
        console.log("------------------------------");
        console.log("¿Deseas agragar mas productos o eliminar?");
        console.log("1. Si");
        console.log("2. No");
        let eleccion_usuario_seguir_elijiendo = prompt();
        
        if (eleccion_usuario_seguir_elijiendo == 1) {
            elejir_productos = true;
        } else {
            elejir_productos = false;
        }
    } else if (eleccion_usuario == 3) {
        console.log("¿Que producto deseas aliminar?");
        console.log(`1. Frutas: ${array_frutas}`);
        console.log(`2. Lacteos: ${array_lacteos}`);
        console.log(`3. Congelados: ${array_congelados}`);
        console.log(`4. Dulces: ${array_dulces}`);
        let eleccion_usuario_eliminar = prompt();
        
        if (eleccion_usuario_eliminar == 1) {
            console.log("¿Que producto deseas eliminar?");
            let numero_usuario_eliminar_producto = prompt("Escribe el numero del producto: ");
            console.log(`Tu producto es ${array_frutas[Number(numero_usuario_eliminar_producto) - 1]} ?`);
            console.log(`¿Deseas eliminar el producto ${array_frutas[Number(numero_usuario_eliminar_producto) - 1]}`);
            console.log("1. Si");
            console.log("2. No");
            eleccion_usuario_eliminar = prompt();
            
            if (eleccion_usuario_eliminar == 1) {
                array_frutas.splice(Number(numero_usuario_eliminar_producto) - 1, 1);
            }
        }
        else if (eleccion_usuario_eliminar == 2) {
            console.log("¿Que producto deseas eliminar?");
            let numero_usuario_eliminar_producto = prompt("Escribe el numero del producto: ");
            console.log(`Tu producto es ${array_lacteos[Number(numero_usuario_eliminar_producto) - 1]} ?`);
            console.log(`¿Deseas eliminar el producto ${array_lacteos[Number(numero_usuario_eliminar_producto) - 1]}`);
            console.log("1. Si");
            console.log("2. No");
            eleccion_usuario_eliminar = prompt();
            
            if (eleccion_usuario_eliminar == 1) {
                array_lacteos.splice(Number(numero_usuario_eliminar_producto) - 1, 1);
            }
        }
        else if (eleccion_usuario_eliminar == 3) {
            console.log("¿Que producto deseas eliminar?");
            let numero_usuario_eliminar_producto = prompt("Escribe el numero del producto: ");
            console.log(`Tu producto es ${array_congelados[Number(numero_usuario_eliminar_producto) - 1]} ?`);
            console.log(`¿Deseas eliminar el producto ${array_congelados[Number(numero_usuario_eliminar_producto) - 1]}`);
            console.log("1. Si");
            console.log("2. No");
            eleccion_usuario_eliminar = prompt();
            
            if (eleccion_usuario_eliminar == 1) {
                array_congelados.splice(Number(numero_usuario_eliminar_producto) - 1, 1);
            }
        }
        else if (eleccion_usuario_eliminar == 4) {
            console.log("¿Que producto deseas eliminar?");
            let numero_usuario_eliminar_producto = prompt("Escribe el numero del producto: ");
            console.log(`Tu producto es ${array_dulces[Number(numero_usuario_eliminar_producto) - 1]} ?`);
            console.log(`¿Deseas eliminar el producto ${array_dulces[Number(numero_usuario_eliminar_producto) - 1]}`);
            console.log("1. Si");
            console.log("2. No");
            eleccion_usuario_eliminar = prompt();
            
            if (eleccion_usuario_eliminar == 1) {
                array_dulces.splice(Number(numero_usuario_eliminar_producto) - 1, 1);
            }
        }
    } else {
        break;
    }
}
console.log("----------------------")
console.log("Productos organizados:")
console.log("Frutas")
console.log(array_frutas)
console.log("Lacteos")
console.log(array_lacteos)
console.log("Congelados")
console.log(array_congelados)
console.log("Dulces")
console.log(array_dulces)