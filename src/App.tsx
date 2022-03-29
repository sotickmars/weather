import React, { useState, createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Yandex from './components/Yandex/Yandex';

import './App.scss';

const StoreContext = createContext([]);

const App: React.FC = () => {

  const [store, setStore] = useState<any>({
    objWeek: []
  })
  return (
    <StoreContext.Provider value={store}>
        <Yandex />
    </StoreContext.Provider>
    // <StoreContext.Provider value={store}>
    /* </StoreContext.Provider> */
  )
}
export default App;
