import logo from './logo.svg';
import Childcom from './components/Childcom';
import './App.css';
import { useState } from 'react';

function App() {

  const [msg, setMsg]=useState(null);

  const receiveMessage=(message)=>{
    setMsg(message);
  }
  
  return (

    <div className="App">
      <h2>Hello, I'm Parent</h2>
      <Childcom setMessage={receiveMessage}/>
      <p>Parent: My child said : {msg}</p>
    </div>
  );
}

export default App;