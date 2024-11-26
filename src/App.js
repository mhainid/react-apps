import React from 'react'
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux';

import { Redux } from './redux/Redux';
import { Reduce } from './redux/reduce/Reduce';
const store=legacy_createStore(Reduce)


export const App = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  )
}
