import { legacy_createStore } from "redux";
import { Reduce } from "./redux/reduce/Reduce";
import React from 'react'
import { Provider } from "react-redux";
import { Redux } from "./redux/Redux";
import { Route, Routes } from "react-router-dom";


const store=legacy_createStore(Reduce)
export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Redux />} />
        
      </Routes>
    </Provider>
  )
}
