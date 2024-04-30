import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({
     reducer
    , initialState
    , children //children is gnerally what is wrap inside the Stateprovider in index.js->App
 }) => (
  <DataLayer.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayer.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
