import React from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";

export default function CharacterCard(props) {
  return (
    <div key={props.id}>
      <img src={props.url} alt={props.name}/>
      <h2>Name: {props.name}</h2>
    </div>
  );
}
