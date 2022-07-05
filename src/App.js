import { Component } from 'react';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';
import './App.css';

class App extends Component() {
  render() {
    return (
      <div className='App'>
        <Header />
        <TeslaBattery />
      </div>
    );
  }
}

export default App;
