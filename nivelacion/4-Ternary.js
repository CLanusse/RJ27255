///Consologuear si Juan puede ver Max Max

const persona = {
  nombre: "Juan",
  edad: 21,
};

const pelicula = {
  titulo: "Mad Max",
  edadMinima: 16,
};

// if (persona.edad >= pelicula.edadMinima) {
//   console.log("Puede ver la película")
// } else {
//   console.log("No puede ver la película")
// }

// ternary operator

const permiso = persona.edad >= pelicula.edadMinima ? true : false

// console.log(permiso)

// logical AND 

const mensaje = permiso && "Puede ver la película"


// logical OR --> retorna el de la derecha si el de la izq es FALSY 
// (null, undefined, NaN, 0, "", false)

const resultado = mensaje || "No puede ver la película"

console.log(resultado)

// nullish coalescing operator => null / undefined

