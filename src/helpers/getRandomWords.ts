// src/helpers/getRandomWords.ts

let words: string[] = [
  "manzana",
  "perro",
  "pelota",
  "computadora",
  "avión",
  "guitarra",
  "flor",
  "libro",
  "película",
  "música",
  "coche",
  "zapato",
  "chocolate",
  "rojo",
  "estrella",
  "familia",
  "ciudad",
  "camisa",
  "juego",
  "sol",
  "pescado",
  "piedra",
  "luz",
  "animal",
  "agua",
  "mariposa",
  "solución",
  "cielo",
  "carne",
  "fiesta",
];

export function getRandomWord(): string {
  const randomIndex: number = Math.floor(Math.random() * words.length);

  return words[randomIndex];
};
