import React from "react";

const WildMagicTable = (props) => {
  const items = props.items;

  return (
    <div>
      <h2>Wild Magic Surge Effects List</h2>

      <div className="magicTable">
        {items.map((item) => {
          return <div className="tableItem">{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default WildMagicTable;
