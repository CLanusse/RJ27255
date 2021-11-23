///1 - Encontrar la temperatura más baja de los tres días

const temperaturasLunes = [16, 20, 5];
const temperaturasMartes = [9, 15, 10];
const temperaturasMiercoles = [14, 20, 8];


// spread - min/max


///2 - Agregar un atributo "peso" al objeto tomas

let tomas = {
  nombre: "Tomás",
  especie: "Perro",
  raza: "caniche",
  edad: 14,
};

// tomas.peso = 9
tomas["peso"] = 9

console.log(tomas)

///3 - Crear una clase (o función constructora) que permita crear objetos tipo Mascota con
// las mismas propiedades que tomás

class Mascota {

  constructor(nombre, especie, raza, edad, peso) {
    this.nombre = nombre
    this.especie = especie
    this.raza = raza
    this.edad = edad
    this.peso = peso
  }

  cumplirAnios() {
    this.edad++
  }

  hablar() {
    console.log(`${this.nombre} dice hola!`)
  }
}

const mascota1 = new Mascota("Tomás", "perro", "caniche", 10, 8)
const mascota2 = new Mascota("Pedro", "perro", "caniche", 10, 8)

mascota1.cumplirAnios()
mascota1.hablar()
mascota2.hablar()

// console.log(mascota1)

// 4 .- Usando métodos de array la clase anterior creada, agregar varios objetos de tipo Mascota
// al array mascotas. Luego recorrer el array y buscar cuál es la mascota más joven, 
// y luego cuál es la más pesada

const mascotas = []

mascotas.push( new Mascota("Tomás", "perro", "caniche", 10, 8) )
mascotas.push( new Mascota("Martin", "gato", "siames", 4, 6) )
mascotas.push( new Mascota("Dory", "pez", "cirujano", 1, 0.5) )

console.log(mascotas)

// find - map - filter - sort - reduce