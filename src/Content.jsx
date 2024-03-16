import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function Content() {
  /* Uncomment and rename the array to 'pokemons'
  const pokemons = [
    {
      studentImage: "https://th.bing.com/th/id/OIP.qHIJUm8PUSQ3NoGYJ4A_TwHaHa?w=615&h=615&rs=1&pid=ImgDetMain",
      id: "[001]",
      studentName: "Anthony Stark",
      btn1: "Grass",
      btn2: "Poison",
      hp: "45",
      attk: "49",
      def: "49",
      studentAlias: "Iron Man"
    },
    {
      studentImage: "https://th.bing.com/th/id/OIP.wRlJcNlseX8Ob7zRSk2CsgHaHa?rs=1&pid=ImgDetMain",
      id: "[002]",
      studentName: "Brei Larson",
      btn1: "Grass",
      btn2: "Poison",
      hp: "45",
      attk: "49",
      def: "49",
      studentAlias: "Captain Marvel"  
    },
    {
      studentImage: "https://th.bing.com/th/id/R.6fb921c1e35102b06cbfbfe3d8b5dec9?rik=mKkZI8vN4e%2f5tQ&riu=http%3a%2f%2fstatic.tvtropes.org%2fpmwiki%2fpub%2fimages%2fmcu_scott_lang.png&ehk=iIQ2EhSk4eaQW83NSQlutT%2bOjYYnKCUs%2bgdaD9Io4Aw%3d&risl=&pid=ImgRaw&r=0",
      id: "[003]",
      studentName: "Henry Jonathan",
      btn1: "Grass",
      btn2: "Poison",
      hp: "45",
      attk: "49",
      def: "49",
      studentAlias: "Ant Man"       
    },
    {
      studentImage: "https://th.bing.com/th/id/OIP.tkGdpebKKIrZGquHZizG7AAAAA?w=320&h=320&rs=1&pid=ImgDetMain",
      id: "[004]",
      studentName: "Christ Hemsworth",
      btn1: "Grass",
      btn2: "Poison",
      hp: "45",
      attk: "49",
      def: "49",
      studentAlias: "Thor Odinson" 
        
    },
    {
      studentImage: "https://th.bing.com/th/id/OIP.y4QD-hm9oZ9WhqqSc69M_gHaHa?w=900&h=900&rs=1&pid=ImgDetMain",
      id: "[005]",
      studentName: "Peter Parker",
      btn1: "Grass",
      btn2: "Poison",
      hp: "45",
      attk: "49",
      def: "49",
      studentAlias: "Spider Man" 
        
    },
  ];
  */

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then(response => response.json())
      .then(data => {
        setPokemons(data)
      })
  }, []);

  return (
    <div>
      {pokemons.map(({ studentImage, id, studentName, btn1, btn2, studentAlias, hp, attk, def }, index) => (
        <Pokemon
          key={index}
          studentImage={studentImage}
          id={id}
          btn1={btn1}
          btn2={btn2}
          hp={hp}
          attk={attk}
          def={def}
          studentName={studentName}
          studentAlias={studentAlias}
        />
      ))}
    </div>
    
  );

  
}

export default Content;
