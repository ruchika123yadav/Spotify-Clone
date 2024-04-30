import React from "react";
// import ReactDOM from "react-dom";// React 18.0.0, ReactDOM.render is disapprove and now we are using createRoot . 
import { createRoot } from 'react-dom';
import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { DataLayer } from "./DataLayer.jsx";
import reducer, { initialState } from "./reducer.jsx";

const root = createRoot(document.getElementById('root'));
// Instead of directly using ReactDOM.render, we create a root using createRoot and then call root.render to render the React tree.
root.render(
  <React.StrictMode>
    <DataLayer
     initialState={initialState} // refers to the starting state of your application before any actions 
     reducer={reducer}> {/* responsible for specifying how the application's state changes in response to dispatched actions. */}

      <App />{/* any component that is a descendant of DataLayer can access this data without prop drilling.Using Context in  App*/}

    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
