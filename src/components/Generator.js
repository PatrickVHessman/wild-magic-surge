import React, { useState } from "react";

const Generator = (props) => {
  const items = props.items;
  const randomSurge = () => {
    const randomNum = Math.floor(Math.random() * (items.length - 1));
    const newItem = items[randomNum];
    console.log(newItem);
    return newItem;
  };

  const [surge, setSurge] = useState(randomSurge());

  const generateSurge = () => {
    const newSurge = randomSurge();
    setSurge(newSurge);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Random Wild Magic Surge</h2>
      <div className="generateButton" onClick={generateSurge}>
        Generate Surge
      </div>
      <div className="generatorTable">{surge.name}</div>
    </div>
  );
};

export default Generator;
