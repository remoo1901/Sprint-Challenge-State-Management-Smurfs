import React, { useState, useEffect } from "react";
import axios from "axios";
import SmurfsContext from "./contexts/SmurfsContext"

import "./App.css";

//Components

import SmurfsForm from "../components/SmurfsForm.js";
import SmurfsList from "../components/SmurfsList.js";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => setSmurfs(res.data))
      .catch((err) => console.log("ERROR", err));
  }, []);

  const postRequest = (item) => {
    axios
      .post("http://localhost:3333/smurfs", item)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //console.log(smurfs)

  return (
    <div className="App">
    <SmurfsContext.Provider  value={{smurfs, postRequest}}>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfsForm />
      <SmurfsList />
      </SmurfsContext.Provider>
    </div>
  );
};

export default App;
