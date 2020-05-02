import React, { useContext, useState } from "react";
import SmurfsContext from "./contexts/SmurfsContext";

function SmurfsForm() {
  const { postRequest } = useContext(SmurfsContext);
  const [smurfForm, setSmurfForm] = useState({ name: "", age: "", height: "" });

  console.log(postRequest);

  const changeHandler = (e) => {
      console.log(e)
    setSmurfForm({...smurfForm, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
      e.preventDefault();
      postRequest(smurfForm)
    e.target.reset()
  }

  return (
    <form  onSubmit={submitHandler}> 
      <label>
        <input
          type="text"
          name="name"
         // value={smurfForm}
          placeholder="name"
          onChange={changeHandler}
        /> 
      </label>
      <label>
        <input
          type="number"
          name="age"
        // value={smurfForm}
          placeholder="age"
          onChange={changeHandler}
        /> 
      </label>
      <label>
        <input
          type="number"
          name="height"
         // value={smurfForm}
          placeholder="height"
          onChange={changeHandler}
        /> 
      </label>

      <button type="submit">Add Smurf</button>
    </form>
  );
}


export default SmurfsForm;