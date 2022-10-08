import React from 'react';
import './App.css';
import SynthEngine from './SynthEngine';
import Footer from './Footer';


export default function App() {
  

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Reactive Synth</h1>
        <h2>A Polyphonic JavaScript Sythesizer</h2>
      </header>
      <SynthEngine/>
      <Footer/>
    </div>
  );
}

