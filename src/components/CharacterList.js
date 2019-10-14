import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  const [ chars, setChars] = useState([]);

  useEffect(() => {
    axios 
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      const charList = res.data.results
      console.log(charList);
      setChars(charList);
    })

    .catch (err => {
      console.log("Error", err);
    })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
