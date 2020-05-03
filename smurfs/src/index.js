import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from "redux"
import { smurfReducer } from "./store/reducers/smurfReducer";
import {Provider} from "react-redux"
import thunk from "redux-thunk"
const store = createStore(smurfReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
