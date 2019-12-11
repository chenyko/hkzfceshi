import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
for(let i=1;i<=10;i++){
 
   setTimeout(function(){
     console.log(i);
     
   },1000)
 
}
for(let i=1;i<=10;i++){
  (function (i) {
    setTimeout(function(){
      console.log(i);

    })
  })(i)
}