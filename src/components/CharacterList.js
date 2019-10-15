import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

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
      {chars.map(person => {
        return (
          <CharacterCard
          id={person.id}
          name={person.name}
          url={person.image}
          />
        )
      })}
    </section>
  );
}
