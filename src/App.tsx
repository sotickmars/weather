import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Yandex from './components/Yandex/Yandex';

import './App.scss';

// const deffoultStore = {
//   objWeek:[]
// };

// const StoreContext = React.createContext(store);


const App: React.FC = () => {
  // const [store, setStore] = useState<any>({
  //   objWeek: []
  // })
  return (
    <>
        <Yandex />
    </>
    // <StoreContext.Provider value={store}>
    /* </StoreContext.Provider> */
  )
}
export default App;
