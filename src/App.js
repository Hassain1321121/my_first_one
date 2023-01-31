import Navbar from "./Navbar"
import Shop from "./shop"
import React from "react";
import { Provider } from "react-redux";

import store from "./state/store";


function App() {
  return (
    
    <div>
    <Provider store={store}>
      <Navbar></Navbar>
<Shop></Shop>
</Provider>
    </div>
  )
}

export default App
