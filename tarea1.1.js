//Ejercicio 1
const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967 },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605 },
    { titulo: "1984", autor: "George Orwell", anio: 1949 }
  ];
  
  const autores = libros.map(libro => libro.autor);
  
  console.log(autores);

  //Ejercicio 2
const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

if (empleado.antiguedad > 5) {
  empleado.salario += empleado.salario * 0.10;
}

console.log(`Nombre: ${empleado.nombre}`);
console.log(`Salario: ${empleado.salario}`);
console.log(`Antigüedad: ${empleado.antiguedad}`);

//Ejercicio 3
const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];

let numeroMayor = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i];
  }
}

console.log(`El número mayor es: ${numeroMayor}`);

//Ejercicio 4
let sumaImpares = 0;
let contadorImpares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) { 
    sumaImpares += numeros[i]; 
    contadorImpares++; 
  }
}
const promedioImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;
console.log(`El promedio es: ${promedioImpares}`);

//Ejercicio 5
const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
const { nombre, edad, ciudad } = persona;

// Mostrar los valores en consola
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Ciudad: ${ciudad}`);


  