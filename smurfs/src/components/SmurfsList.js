import React, { useContext } from "react";
import SmurfsContext from "./contexts/SmurfsContext";

function SmurfsList() {
  const { smurfs } = useContext(SmurfsContext);
  //console.log(smurfs);
  return (
    <div>
      {smurfs.map((x) => (
        <div key={x.id}>
          name: {x.name}, age: {x.age}, height: {x.height}
        </div>
      ))}
    </div>
  );
}

export default SmurfsList;
