import React, { useContext, useState } from "react";
import SmurfsContext from "./contexts/SmurfsContext";

export default function SmurfsForm() {
  const { postRequest } = useContext(SmurfsContext);
  const [smurfForm, setSmurfForm] = useState({ name: "", age: "", Height: "" });

  console.log(postRequest);
  return (
    <div>
      <h1>form</h1>
    </div>
  );
}
