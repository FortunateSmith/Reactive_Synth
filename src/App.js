import React from 'react';
import './App.css';
import SynthEngine from './SynthEngine';
import Footer from './Footer';


export default function App() {
  

  return (
    <div className="App">
      <header className='App-header'>
        <div class='title'>
        <h1>Reactive Synth</h1>
        <h4>A Polyphonic JavaScript Sythesizer</h4>
        </div>
        <div id="box">
          <span id="burst-12"></span>
        </div>
      </header>
      <SynthEngine/>
      <Footer/>
    </div>
  );
}

