import React from 'react';
import Buttons from './components/Buttons';

function App() {
  let myName = "Osora";

  let myStyle = {
    backgroundColor: "blue",
    fontStyle: "italic"

  }

  return (
    <div>
      <p style={{ backgroundColor: "red", fontStyle: "italic" }}>Hello Ifeanyi {myName}</p>
      <p style={myStyle}>2 X 2 = {2 * 2}</p>
      <p className='neche'>Hello</p>
      <p className='bg-green-400'>Hello</p>
        <Buttons btnText="Login" btnStyle="bg-red-400" />
        <Buttons btnText="Register" btnStyle="bg-purple-400" />
        <Buttons btnText="Logout" btnStyle="bg-green-600" />
    </div>
  )
}
export default App;