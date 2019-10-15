import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <nav>
        <Header />
        <Link to="/">Home</Link>
        <Link to="/character-list">Character List</Link>
        <SearchForm />
      </nav>

      <Route exact path="/" component={WelcomePage}/>
      <Route path="/character-list" component={CharacterList}/>

    </main>
  );
}
