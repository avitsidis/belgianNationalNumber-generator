import React from 'react';
import './App.css';
import { NationalNumberGenerator } from './NationalNumberGenerator';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Belgian National Number Generator</h1>
        </header>
        <section className="App-body">
          <NationalNumberGenerator/>
        </section>
        <footer className="App-footer">

        </footer>
      </div>
    );
  }
}



export default App;
