import logo from './logo.svg';
import React from 'react';
import './App.css';
import _monimg from './Component/Profile/ProfilPhoto.js';
import _Name from './Component/Profile/FullName.js';
import _address from './Component/Profile/Address.js';


function App() {
  return (
    <div className="App">
      <_monimg></_monimg>
      <_name></_name>
      <_address />

     
    </div>
  );
}

export default App;
