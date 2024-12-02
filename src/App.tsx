import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* Imagen del juego */}
        <HangImage imageNumber={ 0 } />

        {/* Palabra oculta */}
        <h3 className="text-center">_ _ _ _ _ _ _ _ _ _ _ _</h3>

        {/* Contador intentos */}
        <h3 className="text-center">Intentos: 0</h3>

        {/* Botones de letras */}
        <div className="flex justify-center items-center">
          {
            letters.map((letter) => (
              <button key={letter}>{letter}</button>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default App;
