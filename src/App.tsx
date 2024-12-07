import { useEffect, useState } from "react"; /* hooks */
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";
import "./App.css";

function App() {
  const [word] = useState("React".toUpperCase());
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  // Determinar si el jugador perdio
  useEffect( () => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  // Determinar si el jugador gano
  useEffect( () => {
    const currentHiddenWord = hiddenWord.split(" ").join("");

    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if (word.includes(letter)) {
      const hiddenWordArray = hiddenWord.split(" ");

      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          hiddenWordArray[i] = letter;
        }
      }

      setHiddenWord(hiddenWordArray.join(" "));
    } else {
      let result: number = Math.min(attempts + 1, 9);
      setAttempts(result);
    }
  }

  return (
    <>
      <div>
        {/* Imagen del juego */}
        <HangImage imageNumber={ attempts } />

        {/* Palabra oculta */}
        <h3 className="text-center">{ hiddenWord }</h3>

        {/* Contador intentos */}
        <h3 className="text-center">Intentos: { attempts }</h3>

        {/* Mensaje cuando el jugador pierde */}
        {
          lose ? <h2 className="text-center">Perdió { word }</h2> : ""
        }

        {/* Mensaje cuando el jugador gana */}
        {
          won ? <h2 className="text-center">Felicidades, usted ganó</h2> : ""
        }

        {/* Botones de letras */}
        <div className="flex justify-center items-center">
          {
            letters.map((letter) => (
              <button onClick={ () => checkLetter(letter) } key={letter}>
                {letter}
              </button>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default App;
