import logo from './image/rick-morty.png';
import './App.css';
import { useState, useEffect } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const reqApi = async () => {
      try {
        const api = await fetch('https://rickandmortyapi.com/api/character');
        if (!api.ok) {
          throw new Error('No se pudo cargar la información de los personajes.');
        }
        const characterApi = await api.json();
        setCharacters(characterApi.results);
      } catch (error) {
        console.error(error);
      }
    };

    reqApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} />
        ) : (
          <>
            <img src={logo} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
