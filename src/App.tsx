import React from 'react';
import Buttons from './components/Buttons';
import DesktopNav from './components/nav/DesktopNav';
import AppRoutes from './routes/AppRoutes';

function App() {
  let myName = "Osora";

  let myStyle = {
    backgroundColor: "blue",
    fontStyle: "italic"

  }

  return (
    <div className='text-black'>
      <AppRoutes />
    </div>
  )
}
export default App;