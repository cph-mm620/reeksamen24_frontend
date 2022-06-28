import React from "react";

const FetchReadJr = (props) => {
  // console.log(props.props);
  // console.log(props.props.id);
  // console.log(props.props.name);
  // console.log(props.props.otherManySides);
  // console.log(props.props.otherManySides[0].id);
  // console.log(props.props.otherManySides[0].name);
  return (
    <div style={{ borderBottom: "solid 2px black" }}>
      <h2>Name: {props.props.name}</h2>
      <p>Id: {props.props.id}</p>
      <h3>Other many sides</h3>
      <ul>
        {props.props.otherManySides.map((element, index) => {
          return <li key={index}>Name: {element.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FetchReadJr;
