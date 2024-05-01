import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { DataLayer } from "./DataLayer.jsx";
import reducer, { initialState } from "./reducer.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataLayer
     initialState={initialState} // refers to the starting state of your application before any actions 
     reducer={reducer}> {/* responsible for specifying how the application's state changes in response to dispatched actions. */}

      <App />{/* any component that is a descendant of DataLayer can access this data without prop drilling.Using Context in  App*/}

    </DataLayer>
  </React.StrictMode>
);
// serviceWorker.unregister();
