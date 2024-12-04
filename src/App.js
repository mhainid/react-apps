import { legacy_createStore } from "redux";
import { Reduce } from "./redux/reduce/Reduce";
import React from 'react'
import { Provider } from "react-redux";
import { Redux } from "./redux/Redux";
import { Route, Routes } from "react-router-dom";
import { AddContact } from "./redux/AddContact";
import { Edit } from "./redux/Edit";
import { Detail } from "./redux/Detail";

const store=legacy_createStore(Reduce)
export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Redux />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Provider>
  )
}
