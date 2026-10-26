// FUNCIONES

function solicitarOpcionMenu(saldo) {
    let opcion = prompt(
        "Fondos actuales disponibles: $" + saldo + "\n\n" +
        "¿Qué operación desea realizar?\n1- Ingresar\n2- Transferir\n3- Últimos 5 movimientos\n4- Consultar cajas de ahorro \n5- Salir"
    );
    return opcion === null ? "5" : opcion; //MINI CONDICION PARA QUE TOME COMO QUE SALIÓ
}

function pedirMontoValido(mensaje) {
    while (true) {
        let input = prompt(mensaje);
        if (input === null) return null; //CANCELA

        let monto = parseFloat(input);
        if (!Number.isNaN(monto) && monto > 0) {
            return monto;
        }
        alert("Por favor, ingrese un monto válido mayor a 0.");
    }
}

function ingresarDinero(saldoActual) {
    let monto = pedirMontoValido("Dinero a ingresar: $");
    if (monto === null) {
        alert("Operación cancelada.");
        return saldoActual;
    }

	let nuevoSaldo = saldoActual + monto;
		movimientos.push(monto)
    alert("Has ingresado: $" + monto + "\nNuevos fondos: $" + nuevoSaldo);
    return nuevoSaldo;
}

function transferirDinero(saldoActual) {
    let monto = pedirMontoValido("Dinero a transferir: $");
    if (monto === null) {
        alert("Operación cancelada.");
        return saldoActual;
    }

    if (monto <= saldoActual) {
			let nuevoSaldo = saldoActual - monto;
			movimientos.push(-monto)
        alert("Transferencia exitosa.\nNuevos fondos: $" + nuevoSaldo);
        return nuevoSaldo;
    } else {
        alert("No tenés fondos suficientes para esta transferencia.");
        return saldoActual;
    }
}

function listarMovimientos(movimientos) {
	let texto = "";
	for (i = movimientos.length - 5; i < movimientos.length; i++) {
		texto += `${i + 1}° movimiento: $${movimientos[i]}\n`
	}
	alert(texto)
}

function consultarCaja(cajas) {
	let input = prompt("Ingrese el nombre de la caja cuya ubicación desea comprobar: ");
	if (cajas.includes(input)) {
		alert(`La caja está en el índice ${cajas.indexOf(input)}`)
	}
	else {
		alert("esa caja no existe")
	}
}

// PROGRAMA POSTA (DONDE EMPIEZA EL BUCLE Y ESO)
let fondos = 0;
let usuarioInput;

let movimientos = [100, -50, 30, -50, -30];
let cajas = ["ahorro","viaje","uso"];

do {
    usuarioInput = solicitarOpcionMenu(fondos);

    switch (usuarioInput) {
      case "1":
    		fondos = ingresarDinero(fondos);
        break;
      case "2":
        fondos = transferirDinero(fondos);
        break;
			case "3":
				listarMovimientos(movimientos);
				break;
			case "4":
				consultarCaja(cajas);
				break
      case "5":
        alert("¡Gracias por ser usuario de nuestro banco!");
        break;
      default:
        alert("Opción inválida. Por favor, elija una opción válida.");
        break;
    }
} while (usuarioInput !== "5");
//HOSTIA CHAVAL
