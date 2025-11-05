import React from 'react';
import Buttons from './components/Buttons';
import DesktopNav from './components/nav/DesktopNav';

function App() {
  let myName = "Osora";

  let myStyle = {
    backgroundColor: "blue",
    fontStyle: "italic"

  }

  return (
    <div>
      <DesktopNav />
    </div>
  )
}
export default App;