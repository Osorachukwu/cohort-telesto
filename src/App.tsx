import React, { createContext, useState } from 'react';
import Buttons from './components/Buttons';
import DesktopNav from './components/nav/DesktopNav';
import AppRoutes from './routes/AppRoutes';

export const TelestoConstext = createContext("");

function App() {
  let myName = "Osora";

  let myStyle = {
    backgroundColor: "blue",
    fontStyle: "italic"

  }

  let themeDark = "neche"



  return (
    <TelestoConstext.Provider value={themeDark}>
      <div className='text-black'>
        <AppRoutes />
      </div>
    </TelestoConstext.Provider>

  )
}
export default App;