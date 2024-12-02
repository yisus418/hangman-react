import { useState } from "react";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";
import "./App.css";

function App() {
  const [attempts, setAttempts] = useState(0);

  const checkLetter = (letter: string) => {
    console.log(letter);

    setAttempts(attempts + 1);
  }

  return (
    <>
      <div>
        {/* Imagen del juego */}
        <HangImage imageNumber={ attempts } />

        {/* Palabra oculta */}
        <h3 className="text-center">_ _ _ _ _ _ _ _ _ _ _ _</h3>

        {/* Contador intentos */}
        <h3 className="text-center">Intentos: { attempts }</h3>

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
