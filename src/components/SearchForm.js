import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({ text: "" });

  function handleChange(event) {
    const newQuery = Object.freeze({ text: event.target.value });
    setQuery(newQuery);
  }

  function search() {
    const newQuery = Object.freeze({ text: query.text });
    if (onSearch) onSearch(newQuery);
  }

  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button onClick={search} type="button">
        Search
      </button>
    </form>
  );
}
