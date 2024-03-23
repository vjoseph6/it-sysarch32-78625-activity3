import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    fetch(`https://us-central1-it-sysarch32.cloudfunctions.net/pokemon?language=${language}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      });
  }, [language]); // Run useEffect whenever the language changes

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="pokedex">
      {/* Language buttons */}
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange("english")}>English</button>
        <button onClick={() => handleLanguageChange("japanese")}>Japanese</button>
        <button onClick={() => handleLanguageChange("chinese")}>Chinese</button>
        <button onClick={() => handleLanguageChange("french")}>French</button>
      </div>
      {pokemons.map((pokemon) => (
        <Pokemon 
          id={pokemon.id} 
          name = {pokemon.name} 
          pokemon={pokemon} 
          language={language} 
          image={pokemon.image}
          HP={pokemon.base.HP}
          Speed={pokemon.base.Speed}
          Defense={pokemon.base.Defense}
          SPAttack={pokemon.base["Sp. Attack"]}
          attack={pokemon.base.Attack}
          SPDef={pokemon.base["Sp. Defense"]} />
      ))}
    </div>
  );
}

export default Pokedex;
