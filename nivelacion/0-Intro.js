

//CUMPLEAÑOS

let miEdad = 20;
// escribir una función que aumente miEdad en 1

// function cumplirAnios() {
//     // miEdad = miEdad + 1
//     // miEdad += 1
//     miEdad++
// }

const cumplirAnios = () => {
    miEdad++
}

cumplirAnios()

// console.log(miEdad)

// // VIDA

let vida = 100; // 0 - 100

// escribir una función recibirGolpe(), que reciba un parámetro tipo number
// y se reste al total vida

const recibirGolpe = (golpe) => {
    vida -= golpe

    if (vida < 0) {
        vida = 0
    }
}

recibirGolpe(80)


// escribir una función curar() que regenere la vida en 50, hasta un máx de 100

const curar = () => {
    vida += 50

    if (vida > 100) {
        vida = 100
    }
}

curar()
curar()

recibirGolpe(150)

curar()

console.log(vida)

// escribir un condicional (if) que evalúe si el jugador sigue vivo o no

if (vida === 0) {
    console.log("Estás muerto")
} else {
    console.log("Está vivo")
}

