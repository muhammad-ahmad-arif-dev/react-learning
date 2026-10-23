import { useState } from 'react';
import './App.css';

function App() {

  const [showPassword, setShowPassword] = useState(false);

  function showPasswordFunc() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }

  return(
    <>
      <h2>Hello, welcomie to my website</h2>
      <div className="text-container">
        <input className="form-input-text" type="email" placeholder="Email" />
        <div>
          <input
            className="form-input-text"
            type= {showPassword === false? 'password' : 'text'}
            placeholder="Password" 
          />
          <button
            onClick= {showPasswordFunc}
          >{showPassword === false? 'show' : 'hide'}</button>
        </div>
      </div>
      <div className="button-container">
        <button className="form-button">Login</button>
        <button className="form-button">Sign up</button>
      </div>
    </>
  )
}

export default App;
