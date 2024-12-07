let words: string[] = [
  "COMPUTADORA",
  "AGUACATE",
  "PAPAYA",
  "VEHICULO",
  "ANIMAL",
  "VETERINARIO",
  "CELULAR",
  "TELEFONO",
];

export function getRandomWord(): string {
  const randomIndex: number = Math.floor(Math.random() * words.length);

  return words[randomIndex];
};
